- Installations

- Clone repo

- Open New Terminal

- Go to project directory

- Execute following command to install project dependencies

    <pre><code>npm intall</code></pre>
- Execute following command to install cypress

    <pre><code>npm install cypress</code></pre>
-  Execute following command to install typescript
    <pre><code> npm install --save-dev typescript </code></pre>
- Execute following command to install reporting dependencies
    <pre><code>npm install mocha</code></pre>
    <pre><code>npm install mochawesome</code></pre>
    <pre><code>npm install mochawesome-merge </code></pre>
    <pre><code>npm install mochawesome-report-generator </code></pre>
- Execute following command to open cypress dashboard
    <pre><code>npx cypress open</code></pre>
- You can click test case on dashboard it will start executing
- Before running all cases first we empty folder by this commad for window 10
    <pre><code>rm -r ./cypress/report/mochawesome-report</code></pre>
    <pre><code>rm -r report1.json</code></pre>
- Execute following command to run all cases as headless and it will generate a report as well as the video
    <pre><code>npx cypress run</code></pre>
Note: I am not adding cypress.env.json to gitignore for now. We can add it as we do not have any sensitive info apart from base url
