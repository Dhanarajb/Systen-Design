# User Session Hijacking

## What is User Session Hijacking?
User session hijacking is when a hacker takes control of someone’s session on a website. This means the hacker can pretend to be the user and do things on the website as if they were that person, like checking personal data, changing settings, or even making purchases.

## Why does Session Hijacking happen?
Session hijacking happens when a website doesn’t protect the information that keeps a user logged in, like a **session cookie**. A session cookie is a small piece of data stored in the user’s browser that helps the website know who the user is. If a hacker can steal this cookie, they can take over the session.

### Common causes:
- **Unsecured websites**: If the website doesn’t use secure connections (like HTTPS), hackers can easily "listen in" and steal the session cookies.
- **Cross-Site Scripting (XSS)**: A hacker can inject harmful scripts that steal session cookies.
- **Session fixation**: Hackers trick users into using a session ID that the hacker already knows.

## Why is Session Hijacking dangerous?
If a hacker hijacks a session, they can:
- **Access private info**: See personal messages, account details, or other sensitive data.
- **Do things as the user**: Make purchases, transfer money, or send emails pretending to be the user.
- **Change account settings**: Update passwords, emails, or other important details.

## Scenario:

### Normal situation:
- Alice logs into her online shopping account. The website gives her a session cookie that keeps her logged in while she browses and adds items to her cart.

### Hijacking situation:
- Bob, a hacker, is on the same public Wi-Fi as Alice (like in a coffee shop). Since the shopping website isn’t using HTTPS, Bob uses a tool to "listen in" on the network and steals Alice’s session cookie.
- With Alice’s session cookie, Bob now logs into the website as Alice without needing her password. He can now see Alice’s personal information and even make purchases from her account.
``` javascript
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
   const params = new URLSearchParams(window.location.search);
   const name = params.get('name');
   document.getElementById('username').innerHTML = name;
</script>

</body>
</html>
```
## How to prevent Session Hijacking:

1. **Use HTTPS**: Always use secure connections (HTTPS) so hackers can’t "listen in" and steal session cookies.
2. **Regenerate session IDs**: Change the session ID when a user logs in to prevent hackers from guessing it.
3. **Secure cookies**:
   - **HttpOnly**: This makes it so that cookies can’t be accessed by scripts on the page, which protects against XSS.
   - **Secure**: Cookies should only be sent over HTTPS, making them harder to steal.
4. **Set session expiration**: Make sessions expire after a certain time of inactivity to limit how long a session can be hijacked.
5. **Monitor unusual activity**: Keep an eye out for unusual behavior, like different devices using the same session.
6. **Use Two-Factor Authentication (2FA)**: Make users verify their identity with an extra code to protect against stolen sessions.

## Conclusion:
Session hijacking happens when a hacker steals a session and pretends to be the user on a website. It can be dangerous because the hacker can access sensitive information or take actions as the user. To prevent it, websites need to use secure connections, protect cookies, and monitor sessions carefully.

