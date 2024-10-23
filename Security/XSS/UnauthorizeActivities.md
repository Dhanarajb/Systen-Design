# Unauthorized Activity

## What is Unauthorized Activity?
Unauthorized activity is when someone does things on a computer system or website without permission. This can include accessing information, making changes, or performing actions that they are not allowed to do. This type of activity can happen because of security flaws or when someone tricks a user into giving away their login details.

## Why does Unauthorized Activity happen?
Unauthorized activity can happen due to:
- **Weak security**: Poor passwords or outdated software make it easier for hackers to get in.
- **Phishing**: Hackers trick users into revealing their passwords through fake emails or websites.
- **Malware**: Harmful software can allow hackers to control a user’s device.
- **Insider threats**: Sometimes, people who work at a company misuse their access for personal gain.

## Why is Unauthorized Activity Dangerous?
Unauthorized activity can lead to serious problems, such as:
- **Data breaches**: Sensitive information can be stolen and misused.
- **Financial loss**: Hackers may make unauthorized purchases or steal money.
- **Damage to reputation**: Companies can lose customers' trust if their data is compromised.
- **Legal issues**: Organizations can face penalties if they fail to protect user data.

## Scenario:

### Normal situation:
- Alice works at a company and has a special account where she can see her salary and performance reviews. She only uses this account for her job.

### Unauthorized activity situation:
- Bob, a hacker, manages to steal Alice’s login information through a phishing email that looks like it came from the company’s IT team.
- Once Bob gets into Alice’s account, he can see her sensitive information, such as her salary and personal details, which he shouldn't have access to. Bob could even change her password, locking her out of her account.

## How to Prevent Unauthorized Activity:

1. **Use strong passwords**: Create complex passwords that are hard to guess and change them regularly.
2. **Implement two-factor authentication (2FA)**: This adds an extra layer of security by requiring a second verification step, like a code sent to your phone.
3. **Keep software updated**: Regularly update all systems and applications to protect against vulnerabilities.
4. **Educate users**: Teach employees how to recognize phishing attempts and other scams.
5. **Limit access**: Give users only the access they need for their roles.
6. **Monitor activity**: Watch for unusual behavior in user accounts to detect unauthorized access.

## Example of Vulnerable Code:
The following HTML code shows a simple example of how unauthorized activity can occur due to a vulnerability:

```javascript
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>XSS Example</title>
</head>
<body>

<!-- Vulnerable Code -->
<div>
    Welcome, <span id="username"></span>!
</div>

<script>
    // Function to set a cookie, usually this will be set from the server
    function setCookie(name, value, days) {
        const date = new Date();
        date.setTime(date.getTime() + (days * 24 * 60 * 60 * 1000));
        const expires = "expires=" + date.toUTCString();
        document.cookie = name + "=" + value + ";" + expires + ";path=/";
    }

    // Example: Set a cookie named "exampleCookie" with value "Hello, Cookie!" that expires in 7 days
    setCookie("exampleCookie", "Hello, Cookie!", 7);
</script>

<!-- Vulnerable Code -->
<script>
    const params = new URLSearchParams(window.location.search);
    const name = params.get('name');
    document.getElementById('username').innerHTML = `${name}`;
</script>

</body>
</html>
```
