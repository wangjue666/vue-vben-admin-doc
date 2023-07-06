import{_ as n,f as a,e as t,N as s}from"./plugin-vue_export-helper.147b70e9.js";const g='{"title":"Tinymce","description":"","frontmatter":{},"headers":[{"level":2,"title":"Usage","slug":"usage"},{"level":2,"title":"Props","slug":"props"},{"level":2,"title":"Events","slug":"events"}],"relativePath":"components/tinymce.md","lastUpdated":1688684792042}',e={},p=s(`<h1 id="tinymce"><a class="header-anchor" href="#tinymce" aria-hidden="true">#</a> Tinymce</h1><p>\u5BCC\u6587\u672C\u7EC4\u4EF6\u4F4D\u4E8E <a href="https://github.com/vbenjs/vue-vben-admin/tree/main/src/components/Tinymce" target="_blank" rel="noopener noreferrer">src/components/TinyMce</a></p><div class="tip custom-block"><p class="custom-block-title">\u5BCC\u6587\u672C\u7EC4\u4EF6\u4F7F\u7528\u7684\u662F CDN \u65B9\u5F0F\u5F15\u5165</p><p>\u53EF\u5728 <a href="https://github.com/vbenjs/vue-vben-admin/tree/main/src/components/Tinymce/src/Editor.vue" target="_blank" rel="noopener noreferrer">/@/components/TinyMce/src/Editor.vue</a> \u66F4\u6539\u4E0B\u9762 CDN \u5730\u5740</p><div class="language-ts"><pre><code><span class="token keyword">const</span> <span class="token constant">CDN_URL</span> <span class="token operator">=</span> <span class="token string">&#39;https://cdn.bootcdn.net/ajax/libs/tinymce/5.5.1&#39;</span><span class="token punctuation">;</span>
</code></pre></div></div><h2 id="usage"><a class="header-anchor" href="#usage" aria-hidden="true">#</a> Usage</h2><div class="language-vue"><pre><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>template</span><span class="token punctuation">&gt;</span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>Tinymce</span> <span class="token attr-name">v-model</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>value<span class="token punctuation">&quot;</span></span> <span class="token attr-name">@change</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>handleChange<span class="token punctuation">&quot;</span></span> <span class="token attr-name">width</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>100%<span class="token punctuation">&quot;</span></span> <span class="token punctuation">/&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>template</span><span class="token punctuation">&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>script</span> <span class="token attr-name">lang</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>ts<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span><span class="token script"><span class="token language-javascript">
  <span class="token keyword">import</span> <span class="token punctuation">{</span> defineComponent<span class="token punctuation">,</span> ref <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&#39;vue&#39;</span><span class="token punctuation">;</span>
  <span class="token keyword">import</span> <span class="token punctuation">{</span> Tinymce <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&#39;/@/components/Tinymce/index&#39;</span><span class="token punctuation">;</span>

  <span class="token keyword">export</span> <span class="token keyword">default</span> <span class="token function">defineComponent</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
    <span class="token literal-property property">components</span><span class="token operator">:</span> <span class="token punctuation">{</span> Tinymce <span class="token punctuation">}</span><span class="token punctuation">,</span>
    <span class="token function">setup</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
      <span class="token keyword">const</span> value <span class="token operator">=</span> <span class="token function">ref</span><span class="token punctuation">(</span><span class="token string">&#39;hello world!&#39;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
      <span class="token keyword">function</span> <span class="token function">handleChange</span><span class="token punctuation">(</span><span class="token parameter"><span class="token literal-property property">value</span><span class="token operator">:</span> string</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>value<span class="token punctuation">)</span><span class="token punctuation">;</span>
      <span class="token punctuation">}</span>
      <span class="token keyword">return</span> <span class="token punctuation">{</span> handleChange<span class="token punctuation">,</span> value <span class="token punctuation">}</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>script</span><span class="token punctuation">&gt;</span></span>
</code></pre></div><h2 id="props"><a class="header-anchor" href="#props" aria-hidden="true">#</a> Props</h2><table><thead><tr><th>\u5C5E\u6027</th><th>\u7C7B\u578B</th><th>\u9ED8\u8BA4\u503C</th><th>\u8BF4\u660E</th></tr></thead><tbody><tr><td>options</td><td><code>any</code></td><td>{}</td><td>tinymce \u7684\u914D\u7F6E\u9879</td></tr><tr><td>value(v-model)</td><td><code>string</code></td><td>-</td><td>\u53CC\u5411\u7ED1\u5B9A\u503C</td></tr><tr><td>height</td><td><code>number , string</code></td><td>400</td><td>\u9AD8\u5EA6</td></tr><tr><td>width</td><td><code>number , string</code></td><td>auto</td><td>\u5BBD\u5EA6</td></tr><tr><td>toolbar</td><td><code>string[]</code></td><td>-</td><td>\u5DE5\u5177\u680F</td></tr><tr><td>plugins</td><td><code>string[]</code></td><td>-</td><td>\u63D2\u4EF6</td></tr><tr><td>showImageUpload</td><td><code>boolean</code></td><td>true</td><td>\u662F\u5426\u663E\u793A\u4E0A\u4F20\u6309\u94AE</td></tr></tbody></table><h2 id="events"><a class="header-anchor" href="#events" aria-hidden="true">#</a> Events</h2><table><thead><tr><th>\u4E8B\u4EF6</th><th>\u56DE\u8C03\u53C2\u6570</th><th>\u8FD4\u56DE\u503C</th><th>\u8BF4\u660E</th></tr></thead><tbody><tr><td>change</td><td><code>(str:string)=&gt;{}</code></td><td></td><td>\u5BCC\u6587\u672C\u5185\u5BB9\u6539\u53D8\u89E6\u53D1\u4E8B\u4EF6</td></tr></tbody></table>`,9),o=[p];function c(l,u,r,d,i,k){return t(),a("div",null,o)}var m=n(e,[["render",c]]);export{g as __pageData,m as default};
