# Getting Started: Claim you Subdomain <Badge type="tip" text="guide" />

This guide explains how to get a free `*.mlcommunity.dev` subdomain for your machine learning, data science, AI, or research project.

**Steps:**

1. **Fork the Repository:** Fork the [ddns repository](https://github.com/ml-comm/ddns/fork) to your GitHub account. This creates a copy you can edit.

2. **Create a Configuration File:**
   - In your forked repository, create a new JSON file inside the `domains` directory.
   - Name the file after your desired subdomain (e.g., `my-project.json` for `my-project.mlcommunity.dev`).  The full path would be `domains/my-project.json`.
   - **Important:**  See the [format documentation](FORMAT.md) for the required JSON structure.  Double-check your file for accuracy.

3. **Request Your Subdomain:** Open an issue on the main ddns repository using the [request template](https://github.com/ml-comm/ddns/issues/new?assignees=&labels=request&projects=&template=REQUEST.yml&title=%5BREQUEST%5D%3A+).  Discuss your desired subdomain and any specific needs.  This allows us to review and approve your request.

4. **Submit a Pull Request:** Once your request is approved, create a pull request from your forked repository to the main `ddns` repository, including your newly created JSON file.

5. **Review and Adjustments:**  We may review your pull request and leave comments or labels if there are any issues (e.g., unavailable subdomain, formatting problems).  Please address these and update your pull request as needed.

6. **Subdomain Activation:**  We'll merge your pull request once everything is in order and activate your subdomain.

7. **Managing Your Subdomain:** You can update your subdomain settings at any time by submitting a new pull request with the modified JSON file.


## Important Considerations:

* **Valid Records:**  Only permitted record types are allowed. We'll notify you if there are issues.
* **Acceptable Use:** Subdomains must be related to machine learning, data science, AI, or research and cannot violate privacy, serve malicious content, or be used for illegal activities.
* **Inactivity:** Inactive subdomains may be purged. We'll attempt to notify you via the email you provided before purging.
* **Denied Requests:** We reserve the right to deny subdomain requests that don't meet these criteria.