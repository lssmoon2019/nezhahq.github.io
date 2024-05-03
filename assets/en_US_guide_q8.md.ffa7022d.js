import{_ as e,o as a,c as o,R as c}from"./chunks/framework.44fd0451.js";const f=JSON.parse('{"title":"","description":"","frontmatter":{},"headers":[],"relativePath":"en_US/guide/q8.md","filePath":"en_US/guide/q8.md","lastUpdated":1714697355000}'),t={name:"en_US/guide/q8.md"},s=c(`<h2 id="example-config" tabindex="-1">Example Config： <a class="header-anchor" href="#example-config" aria-label="Permalink to &quot;Example Config：&quot;">​</a></h2><div class="language-yaml"><button title="Copy Code" class="copy"></button><span class="lang">yaml</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#F07178;">Oauth2</span><span style="color:#89DDFF;">:</span></span>
<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#F07178;">Admin</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">701b9ea6-9f56-48cd-af3e-cbb4bfc1475c</span></span>
<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#F07178;">ClientID</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">3516291f53eca9b4901a01337e41be7dc52f565c8657d08a3fddb2178d13c5bf</span></span>
<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#F07178;">ClientSecret</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">0568b67c7b6d0ed51c663e2fe935683007c28f947a27b7bd47a5ad3d8b56fb67</span></span>
<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#F07178;">Endpoint</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">https://akkia.cloudflareaccess.com</span><span style="color:#89DDFF;">&quot;</span></span>
<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#F07178;">Type</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">cloudflare</span></span></code></pre></div><h2 id="config-detail" tabindex="-1">Config Detail： <a class="header-anchor" href="#config-detail" aria-label="Permalink to &quot;Config Detail：&quot;">​</a></h2><table><thead><tr><th>Name</th><th>How to Obtain</th></tr></thead><tbody><tr><td>Admin</td><td><code>My Team</code> -&gt; <code>Users</code> -&gt; <code>&lt;Specific User&gt;</code> -&gt; <code>User ID</code></td></tr><tr><td>ClientID/ClientSecret</td><td><code>Access</code> -&gt; <code>Application</code> -&gt; <code>Add an Application</code> <br> -&gt; <code>SaaS</code> -&gt; <code>OIDC</code></td></tr><tr><td>Endpoint</td><td><code>Access</code> -&gt; <code>Application</code> -&gt; <code>Application URL</code> -&gt; <code>Only Schema&amp;Domain part</code></td></tr></tbody></table><h3 id="create-saas-oidc-application" tabindex="-1">Create SaaS-OIDC application <a class="header-anchor" href="#create-saas-oidc-application" aria-label="Permalink to &quot;Create SaaS-OIDC application&quot;">​</a></h3><p>Zero Trust Dashboard: <a href="https://one.dash.cloudflare.com" target="_blank" rel="noreferrer">https://one.dash.cloudflare.com</a></p><ol><li><code>Access</code> -&gt; <code>Application</code> -&gt; <code>Add an Application</code>;</li><li>Select <code>SaaS</code>, Input your custom application name in <code>Application</code> field，select <code>OIDC</code> and click <code>Add application</code>;</li><li>Select <code>openid</code>, <code>email</code>, <code>profile</code>, <code>groups</code> in <code>Scopes</code> field;</li><li>Input your CallBack URL in <code>Redirect URLs</code> field (e.g. <code>https://monitor.example.com/oauth2/callback</code>);</li><li>Record <code>Client ID</code>, <code>Client Secret</code> and Schemas&amp;Domain part in <code>Issuer</code> (e.g. <code>https://akkia.cloudflareaccess.com</code>);</li><li>Modify Dashboard Config ( location: <code>/opt/nezha/dashboard/data/config.yaml</code>), and restart Dashboard service;</li></ol>`,7),n=[s];function l(d,p,i,r,D,h){return a(),o("div",null,n)}const y=e(t,[["render",l]]);export{f as __pageData,y as default};