---
outline: deep
---
# Formats <Badge type="danger" text="DNS" />

Following the specific JSON format is important as it allows us to easily process your domain without any issues. If the correct format is not followed, you will be told and the pull request will **not** be merged. 

When submitting your pull request, we ask that you add your email under the email key in the file. This is so that we can contact you if anything is due to change or if your subdomain has violated laws, terms or anything of that nature. Invalid contact details will end up with you being refused a subdomain. 

## JSON Format Template
```json
{
  "repo": "",

  "owner": {
    "username": "",
    "email": ""
  },

  "target": {
    "record-type": {
       "name": "", 
       "value": ""
     }
  },

  "proxied": false
}
```

**Breakdown of the template**:
- *"repo"* - This is your repository, the place where the code for the site is. If you don't have a repository you can leave this field blank or remove the field.
- *"owner"* - This is a category for your information. This section needs to be filled out, or your pull request will **not** be merged.
  - *"username"* - This is where you put your GitHub username.
  - *"email"* - This is where you put your email address.
- *"record-type"* - This is a category for the record information.
  - *"name"* - This is the desired subdomain.
  - *"value"* - This is the value for the record, for example with an `A` record it would be an IP.
- *"proxied"* - If you want the record proxied through Cloudflare. If you don't know what it means, leave it to false.

## JSON Example 
```json
{
    "repo": "https://github.com/ML-comm/ddns",

    "owner": {
        "username": "ml-comm",
        "email": "admin@mlcommunity.dev"
    },

    "target": {
        "CNAME": {
            "name": "demo",
            "value": "ml-comm.github.io"
        }
    },

    "proxied": true
}
```
*You can find a demo file [here](https://github.com/ml-comm/ddns/blob/main/domains/demo.json).*
