function getDomainsList(filesPath) {
    let result = [];
    let files = glob(filesPath, true, ".json");

    for (const element of files) {
        let name = element.split("/").pop().replace(/\.json$/, "");

        result.push({ name: name, data: require(element) });
    }

    return result;
}

let allDomains = getDomainsList("./domains");

let commit = [];

for (let subdomain in allDomains) {
    let subdomainName = allDomains[subdomain].name;
    let domainData = allDomains[subdomain].data;
    let proxyState = domainData.proxied ? { cloudflare_proxy: "on" } : { cloudflare_proxy: "off" };

    // Handle A records
    if (domainData.target.A) {
        for (let a in domainData.target.A.value) {
            commit.push(A(domainData.target.A.name, IP(domainData.target.A.value[a]), proxyState));
        }
    }

    // Handle AAAA records
    if (domainData.target.AAAA) {
        for (let aaaa in domainData.target.AAAA.value) {
            commit.push(AAAA(domainData.target.AAAA.name, domainData.target.AAAA.value[aaaa], proxyState));
        }
    }

    // Handle CNAME records
    if (domainData.target.CNAME) {
        // Allow CNAME target on root
        if (subdomainName === "@") {
            commit.push(ALIAS(domainData.target.CNAME.name, domainData.target.CNAME.value + ".", proxyState));
        } else {
            commit.push(CNAME(domainData.target.CNAME.name, domainData.target.CNAME.value + ".", proxyState));
        }
    }

    // Handle TXT records
    if (domainData.target.TXT) {
        if (Array.isArray(domainData.target.TXT)) {
            for (let txt in domainData.target.TXT) {
                let txtRecord = domainData.target.TXT[txt];
                commit.push(TXT(txtRecord.name, txtRecord.value));
            }
        } else {
            commit.push(TXT(domainData.target.TXT.name === "@" ? subdomainName : domainData.target.TXT.name + "." + subdomainName, domainData.target.TXT.value));
        }
    }

    // Handle MX records
    if (domainData.target.MX) {
        if (Array.isArray(domainData.target.MX)) {
            for (let mx in domainData.target.MX) {
                let mxRecord = domainData.target.MX[mx];
                commit.push(MX(mxRecord.name, mxRecord.priority, mxRecord.value));
            }
        } else {
            commit.push(MX(domainData.target.MX.name === "@" ? subdomainName : domainData.target.MX.name + "." + subdomainName, domainData.target.MX.priority, domainData.target.MX.value));
        }
    }

    // Handle SRV records
    if (domainData.target.SRV) {
        if (Array.isArray(domainData.target.SRV)) {
            for (let srv in domainData.target.SRV) {
                let srvRecord = domainData.target.SRV[srv];
                commit.push(SRV(srvRecord.name, srvRecord.priority, srvRecord.weight, srvRecord.port, srvRecord.value));
            }
        } else {
            commit.push(SRV(domainData.target.SRV.name === "@" ? subdomainName : domainData.target.SRV.name + "." + subdomainName, domainData.target.SRV.priority, domainData.target.SRV.weight, domainData.target.SRV.port, domainData.target.SRV.value));
        }
    }

    // Handle TLSA records
    if (domainData.target.TLSA) {
        if (Array.isArray(domainData.target.TLSA)) {
            for (let tlsa in domainData.target.TLSA) {
                let tlsaRecord = domainData.target.TLSA[tlsa];
                commit.push(TLSA(tlsaRecord.name, tlsaRecord.usage, tlsaRecord.selector, tlsaRecord.matchingType, tlsaRecord.certificate));
            }
        } else {
            commit.push(TLSA(domainData.target.TLSA.name === "@" ? subdomainName : domainData.target.TLSA.name + "." + subdomainName, domainData.target.TLSA.usage, domainData.target.TLSA.selector, domainData.target.TLSA.matchingType, domainData.target.TLSA.certificate));
        }
    }
}

// *.mx.mlcommunity.dev
// commit.push(IGNORE("*", "MX", "*"));

// Commit all DNS records
D("mlcommunity.dev", NewRegistrar("none"), DnsProvider(NewDnsProvider("cloudflare")), commit);