import{_ as t,f as n,e as a,N as s}from"./plugin-vue_export-helper.147b70e9.js";const h='{"title":"BasicDragVerify","description":"","frontmatter":{},"headers":[{"level":2,"title":"BasicDragVerify","slug":"basicdragverify-1"},{"level":3,"title":"Usage","slug":"usage"},{"level":3,"title":"Props","slug":"props"},{"level":3,"title":"Methods","slug":"methods"},{"level":2,"title":"RotateDragVerify","slug":"rotatedragverify"},{"level":3,"title":"Usage","slug":"usage-1"},{"level":3,"title":"props","slug":"props-1"},{"level":3,"title":"Methods","slug":"methods-1"}],"relativePath":"components/verify.md","lastUpdated":1688684792042}',p={},e=s(`<h1 id="basicdragverify"><a class="header-anchor" href="#basicdragverify" aria-hidden="true">#</a> BasicDragVerify</h1><p>\u62D6\u52A8\u6821\u9A8C\u7EC4\u4EF6</p><h2 id="basicdragverify-1"><a class="header-anchor" href="#basicdragverify-1" aria-hidden="true">#</a> BasicDragVerify</h2><h3 id="usage"><a class="header-anchor" href="#usage" aria-hidden="true">#</a> Usage</h3><div class="language-vue"><pre><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>template</span><span class="token punctuation">&gt;</span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>p-10<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>BasicDragVerify</span> <span class="token attr-name">@success</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>handleSuccess<span class="token punctuation">&quot;</span></span> <span class="token punctuation">/&gt;</span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>template</span><span class="token punctuation">&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>script</span> <span class="token attr-name">lang</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>ts<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span><span class="token script"><span class="token language-javascript">
  <span class="token keyword">import</span> <span class="token punctuation">{</span> defineComponent<span class="token punctuation">,</span> ref <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&#39;vue&#39;</span><span class="token punctuation">;</span>
  <span class="token keyword">import</span> <span class="token punctuation">{</span> BasicDragVerify<span class="token punctuation">,</span> DragVerifyActionType<span class="token punctuation">,</span> PassingData <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&#39;/@/components/Verify/index&#39;</span><span class="token punctuation">;</span>
  <span class="token keyword">export</span> <span class="token keyword">default</span> <span class="token function">defineComponent</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
    <span class="token literal-property property">components</span><span class="token operator">:</span> <span class="token punctuation">{</span> BasicDragVerify <span class="token punctuation">}</span><span class="token punctuation">,</span>
    <span class="token function">setup</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
      <span class="token keyword">function</span> <span class="token function">handleSuccess</span><span class="token punctuation">(</span><span class="token parameter"><span class="token literal-property property">data</span><span class="token operator">:</span> PassingData</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">const</span> <span class="token punctuation">{</span> time <span class="token punctuation">}</span> <span class="token operator">=</span> data<span class="token punctuation">;</span>
        createMessage<span class="token punctuation">.</span><span class="token function">success</span><span class="token punctuation">(</span><span class="token template-string"><span class="token template-punctuation string">\`</span><span class="token string">\u6821\u9A8C\u6210\u529F,\u8017\u65F6</span><span class="token interpolation"><span class="token interpolation-punctuation punctuation">\${</span>time<span class="token interpolation-punctuation punctuation">}</span></span><span class="token string">\u79D2</span><span class="token template-punctuation string">\`</span></span><span class="token punctuation">)</span><span class="token punctuation">;</span>
      <span class="token punctuation">}</span>
      <span class="token keyword">return</span> <span class="token punctuation">{</span>
        handleSuccess<span class="token punctuation">,</span>
        handleBtnClick<span class="token punctuation">,</span>
      <span class="token punctuation">}</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>script</span><span class="token punctuation">&gt;</span></span>
</code></pre></div><h3 id="props"><a class="header-anchor" href="#props" aria-hidden="true">#</a> Props</h3><table><thead><tr><th>\u5C5E\u6027</th><th>\u7C7B\u578B</th><th>\u9ED8\u8BA4\u503C</th><th>\u8BF4\u660E</th></tr></thead><tbody><tr><td>value</td><td><code>boolean</code></td><td>-</td><td>\u662F\u5426\u901A\u8FC7</td></tr><tr><td>text</td><td><code>string</code></td><td><code>\u8BF7\u6309\u4F4F\u6ED1\u5757\u62D6\u52A8</code></td><td>\u672A\u62D6\u52A8\u65F6\u5019\u663E\u793A\u6587\u5B57</td></tr><tr><td>successText</td><td><code>string</code></td><td><code>\u9A8C\u8BC1\u901A\u8FC7</code></td><td>\u9A8C\u8BC1\u6210\u529F\u540E\u663E\u793A\u6587\u672C</td></tr><tr><td>height</td><td><code>string\uFF5Cstring</code></td><td>40</td><td>\u9AD8\u5EA6</td></tr><tr><td>width</td><td><code>string\uFF5Cstring</code></td><td>260</td><td>\u5BBD\u5EA6</td></tr><tr><td>circle</td><td><code>boolean</code></td><td>false</td><td>\u662F\u5426\u5706\u89D2</td></tr><tr><td>wrapStyle</td><td><code>any</code></td><td>-</td><td>\u5916\u5C42\u5BB9\u5668\u6837\u5F0F</td></tr><tr><td>contentStyle</td><td><code>any</code></td><td>-</td><td>\u4E3B\u4F53\u5185\u5BB9\u6837\u5F0F</td></tr><tr><td>barStyle</td><td><code>any</code></td><td>-</td><td>bar \u6837\u5F0F</td></tr><tr><td>actionStyle</td><td><code>any</code></td><td>-</td><td>\u62D6\u62FD\u6309\u94AE\u6837\u5F0F</td></tr></tbody></table><h3 id="methods"><a class="header-anchor" href="#methods" aria-hidden="true">#</a> Methods</h3><table><thead><tr><th>\u540D\u79F0</th><th>\u56DE\u8C03\u53C2\u6570</th><th>\u8BF4\u660E</th></tr></thead><tbody><tr><td>resume</td><td><code>()=&gt;{}</code></td><td>\u8FD8\u539F\u521D\u59CB\u503C</td></tr></tbody></table><h2 id="rotatedragverify"><a class="header-anchor" href="#rotatedragverify" aria-hidden="true">#</a> RotateDragVerify</h2><p>\u56FE\u7247\u8FD8\u539F\u6B63\u65B9\u5411\u6821\u9A8C\u7EC4\u4EF6</p><h3 id="usage-1"><a class="header-anchor" href="#usage-1" aria-hidden="true">#</a> Usage</h3><div class="language-vue"><pre><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>template</span><span class="token punctuation">&gt;</span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>p-10<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>RotateDragVerify</span> <span class="token attr-name">:src</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>img<span class="token punctuation">&quot;</span></span> <span class="token attr-name">ref</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>el<span class="token punctuation">&quot;</span></span> <span class="token attr-name">@success</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>handleSuccess<span class="token punctuation">&quot;</span></span> <span class="token punctuation">/&gt;</span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>template</span><span class="token punctuation">&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>script</span> <span class="token attr-name">lang</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>ts<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span><span class="token script"><span class="token language-javascript">
  <span class="token keyword">import</span> <span class="token punctuation">{</span> defineComponent <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&#39;vue&#39;</span><span class="token punctuation">;</span>
  <span class="token keyword">import</span> <span class="token punctuation">{</span> RotateDragVerify <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&#39;/@/components/Verify/index&#39;</span><span class="token punctuation">;</span>

  <span class="token keyword">import</span> img <span class="token keyword">from</span> <span class="token string">&#39;/@/assets/images/header.jpg&#39;</span><span class="token punctuation">;</span>
  <span class="token keyword">export</span> <span class="token keyword">default</span> <span class="token function">defineComponent</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
    <span class="token literal-property property">components</span><span class="token operator">:</span> <span class="token punctuation">{</span> RotateDragVerify <span class="token punctuation">}</span><span class="token punctuation">,</span>
    <span class="token function">setup</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
      <span class="token keyword">const</span> <span class="token function-variable function">handleSuccess</span> <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
        console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">&#39;success!&#39;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
      <span class="token punctuation">}</span><span class="token punctuation">;</span>
      <span class="token keyword">return</span> <span class="token punctuation">{</span>
        handleSuccess<span class="token punctuation">,</span>
        img<span class="token punctuation">,</span>
      <span class="token punctuation">}</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>script</span><span class="token punctuation">&gt;</span></span>
</code></pre></div><h3 id="props-1"><a class="header-anchor" href="#props-1" aria-hidden="true">#</a> props</h3><table><thead><tr><th>\u5C5E\u6027</th><th>\u7C7B\u578B</th><th>\u9ED8\u8BA4\u503C</th><th>\u8BF4\u660E</th></tr></thead><tbody><tr><td>src</td><td><code>string</code></td><td>-</td><td>\u56FE\u7247\u5730\u5740</td></tr><tr><td>imgWidth</td><td><code>number</code></td><td>-</td><td>\u56FE\u7247\u5BBD\u5EA6</td></tr><tr><td>imgWrapStyle</td><td><code>any</code></td><td>-</td><td>\u56FE\u7247\u5916\u5C42\u5BB9\u5668\u6837\u5F0F</td></tr><tr><td>minDegree</td><td><code>number</code></td><td>-</td><td>\u6700\u5C0F\u65CB\u8F6C\u89D2\u5EA6</td></tr><tr><td>maxDegree</td><td><code>number</code></td><td>-</td><td>\u6700\u5927\u65CB\u8F6C\u89D2\u5EA6</td></tr><tr><td>diffDegree</td><td><code>number</code></td><td>-</td><td>\u8BEF\u5DEE\u89D2\u5EA6</td></tr><tr><td>value</td><td><code>boolean</code></td><td>-</td><td>\u662F\u5426\u901A\u8FC7</td></tr><tr><td>text</td><td><code>string</code></td><td><code>\u8BF7\u6309\u4F4F\u6ED1\u5757\u62D6\u52A8</code></td><td>\u672A\u62D6\u52A8\u65F6\u5019\u663E\u793A\u6587\u5B57</td></tr><tr><td>successText</td><td><code>string</code></td><td><code>\u9A8C\u8BC1\u901A\u8FC7</code></td><td>\u9A8C\u8BC1\u6210\u529F\u540E\u663E\u793A\u6587\u672C</td></tr><tr><td>height</td><td><code>string\uFF5Cstring</code></td><td>40</td><td>\u9AD8\u5EA6</td></tr><tr><td>width</td><td><code>string\uFF5Cstring</code></td><td>260</td><td>\u5BBD\u5EA6</td></tr><tr><td>circle</td><td><code>boolean</code></td><td>false</td><td>\u662F\u5426\u5706\u89D2</td></tr><tr><td>wrapStyle</td><td><code>any</code></td><td>-</td><td>\u5916\u5C42\u5BB9\u5668\u6837\u5F0F</td></tr><tr><td>contentStyle</td><td><code>any</code></td><td>-</td><td>\u4E3B\u4F53\u5185\u5BB9\u6837\u5F0F</td></tr><tr><td>barStyle</td><td><code>any</code></td><td>-</td><td>bar \u6837\u5F0F</td></tr><tr><td>actionStyle</td><td><code>any</code></td><td>-</td><td>\u62D6\u62FD\u6309\u94AE\u6837\u5F0F</td></tr></tbody></table><h3 id="methods-1"><a class="header-anchor" href="#methods-1" aria-hidden="true">#</a> Methods</h3><table><thead><tr><th>\u540D\u79F0</th><th>\u56DE\u8C03\u53C2\u6570</th><th>\u8BF4\u660E</th></tr></thead><tbody><tr><td>resume</td><td><code>Function</code></td><td>\u8FD8\u539F\u521D\u59CB\u503C</td></tr></tbody></table>`,17),o=[e];function c(d,l,u,r,i,k){return a(),n("div",null,o)}var y=t(p,[["render",c]]);export{h as __pageData,y as default};
