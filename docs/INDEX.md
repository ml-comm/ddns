---
layout: default
title: Getting Started
nav_order: 1
---

## Getting Started

- [Fork](https://github.com/ml-comm/ddns/fork) the ddns repository to your GitHub account
- Create a new file under the `domains` directory.
  - Name the file according to the sub-domain name that you would like, for example `my-project.json`.

    *The file path and name should look somewhat similar to this: `domains/my-project.json`*
- Read the format documentation [here](FORMAT.md) to see what json format you should be following.
- Check over your file to make sure that everything looks right and matches the format.
- Open a Issue first via [here](https://github.com/ml-comm/ddns/issues/new?assignees=&labels=request&projects=&template=REQUEST.yml&title=%5BREQUEST%5D%3A+) to discuss the subdomain you want to register.
- When your request is approved, open a pull request with the file you created.
- Check up on your pull request. Sometimes we will comment or add a new label, these can mean that you domain is unavailable or something is wrong with the file. If this is the case, don't worry! You are still able to get a domain, but you may have to either change the file name or check over the file again.
- Leave the rest down to us, we will make sure that the subdomain is sorted out.
- Once your pull request has been merged, enjoy the subdomain. If you ever need to change the subdomain, don't hesitate to open a new pull request to change any of the details.

---

Your pull request **will not** be merged if:
- The records provided includes invalid/unpermitted record types. If this happens we will notify you and request changes.
- It violates users privacy.
- It serves malicious content.
- Not related to Machine Learning / Data Science / Artificial Intelligence / Research.
- The subdomain is already taken.

*If your subdomain is inactive, it may be purged. We will try and notify you before purging via the email you provided.*