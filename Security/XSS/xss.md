# Create a markdown file with the content provided by the user

content = """

# Cross-Site Scripting (XSS)

## What is XSS (Cross-Site Scripting)?

XSS is a security problem in websites that lets attackers put harmful scripts (like JavaScript) into web pages. These scripts run in the browser of anyone who visits that page, which can lead to stealing data or causing other issues.

## Why does XSS happen?

XSS happens when a website doesn’t check or clean up user input (like text from a form or URL) before showing it on the page. If a hacker puts bad code into those inputs, it gets shown and runs in the browser.

## Why is XSS dangerous?

XSS can:

- Steal your session cookies (letting attackers pretend to be you on the site).
- Steal personal or sensitive data.
- Trick you into entering details on fake pages.
- Redirect you to harmful websites.

## When does XSS happen?

It happens when a website shows untrusted content (like user comments or search results) without making sure it’s safe. This could happen when submitting forms, using URLs with parameters, or interacting with third-party tools.

## Where does XSS occur?

It can happen in any part of a website that shows user-generated content, such as:

- Comments
- Search results
- User profiles
- Custom links

## How to prevent XSS:

- Check and clean all user input.
- Make sure the data shown to users can’t run harmful scripts.
- Use security tools (like Content Security Policy) to block untrusted scripts from running.

## Scenario:

### Normal Situation:

- A user named Alice visits the blog and leaves a comment: "Great post!"
- The website displays Alice's comment as "Great post!" on the page for everyone to see.

### XSS Attack Situation:

- A hacker named Bob visits the same blog and leaves a comment, but instead of normal text, he enters this:
  ```html
  <script>
    alert("You are hacked!");
  </script>
  ```
