import{_ as e}from"./plugin-vue_export-helper.21dcd24c.js";import{o as t,c as p,a as n,b as o,d as s,e as c,r as i}from"./app.71d4843f.js";const l={},u=n("h1",{id:"\u62D3\u6251\u6392\u5E8F",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#\u62D3\u6251\u6392\u5E8F","aria-hidden":"true"},"#"),s(" \u62D3\u6251\u6392\u5E8F")],-1),r=n("h2",{id:"\u95EE\u9898\u80CC\u666F",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#\u95EE\u9898\u80CC\u666F","aria-hidden":"true"},"#"),s(" \u95EE\u9898\u80CC\u666F")],-1),k={href:"https://leetcode.cn/problems/course-schedule/",target:"_blank",rel:"noopener noreferrer"},d=s("207. \u8BFE\u7A0B\u8868"),v=c(`<div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>\u4F60\u8FD9\u4E2A\u5B66\u671F\u5FC5\u987B\u9009\u4FEE numCourses \u95E8\u8BFE\u7A0B\uFF0C\u8BB0\u4E3A 0 \u5230 numCourses - 1 \u3002
\u5728\u9009\u4FEE\u67D0\u4E9B\u8BFE\u7A0B\u4E4B\u524D\u9700\u8981\u4E00\u4E9B\u5148\u4FEE\u8BFE\u7A0B\u3002 \u5148\u4FEE\u8BFE\u7A0B\u6309\u6570\u7EC4 prerequisites \u7ED9\u51FA\uFF0C\u5176\u4E2D prerequisites[i] = [ai, bi] \uFF0C\u8868\u793A\u5982\u679C\u8981\u5B66\u4E60\u8BFE\u7A0B ai \u5219 \u5FC5\u987B \u5148\u5B66\u4E60\u8BFE\u7A0B  bi \u3002

\u4F8B\u5982\uFF0C\u5148\u4FEE\u8BFE\u7A0B\u5BF9 [0, 1] \u8868\u793A\uFF1A\u60F3\u8981\u5B66\u4E60\u8BFE\u7A0B 0 \uFF0C\u4F60\u9700\u8981\u5148\u5B8C\u6210\u8BFE\u7A0B 1 \u3002
\u8BF7\u4F60\u5224\u65AD\u662F\u5426\u53EF\u80FD\u5B8C\u6210\u6240\u6709\u8BFE\u7A0B\u7684\u5B66\u4E60\uFF1F\u5982\u679C\u53EF\u4EE5\uFF0C\u8FD4\u56DE true \uFF1B\u5426\u5219\uFF0C\u8FD4\u56DE false \u3002

\u793A\u4F8B 1\uFF1A
\u8F93\u5165\uFF1AnumCourses = 2, prerequisites = [[1,0]]
\u8F93\u51FA\uFF1Atrue
\u89E3\u91CA\uFF1A\u603B\u5171\u6709 2 \u95E8\u8BFE\u7A0B\u3002\u5B66\u4E60\u8BFE\u7A0B 1 \u4E4B\u524D\uFF0C\u4F60\u9700\u8981\u5B8C\u6210\u8BFE\u7A0B 0 \u3002\u8FD9\u662F\u53EF\u80FD\u7684\u3002

\u63D0\u793A\uFF1A
1 &lt;= numCourses &lt;= 105
0 &lt;= prerequisites.length &lt;= 5000
prerequisites[i].length == 2
0 &lt;= ai, bi &lt; numCourses
prerequisites[i] \u4E2D\u7684\u6240\u6709\u8BFE\u7A0B\u5BF9 \u4E92\u4E0D\u76F8\u540C
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="\u601D\u8DEF" tabindex="-1"><a class="header-anchor" href="#\u601D\u8DEF" aria-hidden="true">#</a> \u601D\u8DEF</h2><p>\u5F53\u5B8C\u6210\u4E00\u4EF6\u4E8B\u60C5\u9700\u8981\u5148\u540E\u987A\u5E8F\u7684\u65F6\u5019\uFF0C\u6BD4\u5982A\u4E4B\u540E\u624D\u80FD\u505AB\uFF0CC\u4E4B\u540E\u624D\u80FD\u505AB. <br> \u90A3\u4E48B\u7684\u524D\u9762\u5C31\u67092\u4E2A\u4F9D\u8D56 A \u548C C\uFF0C\u5F53A\u5B8C\u6210\u4E4B\u540E\uFF0CB\u7684\u524D\u9762\u53EA\u6709C\u4E86\uFF1B\u5F53C\u5B8C\u6210\u4E4B\u540E\uFF0CB\u524D\u9762\u5C31\u6CA1\u6709\u4E86\uFF0C \u5C31\u53EF\u4EE5\u5B8C\u6210B\u3002<br> \u8FD9\u4E2A\u5C31\u662F\u62D3\u6251\u6392\u5E8F\u7684\u601D\u8DEF\uFF1A\u4F7F\u7528\u6570\u7EC4\u8BB0\u5F55\u6BCF\u4E00\u4E2A\u8282\u70B9\u7684\u524D\u9762\u6709\u591A\u5C11\u4E2A\u4F9D\u8D56\uFF0C\u5982\u679C\u6CA1\u6709\u4F9D\u8D56\u90A3\u53EF\u4EE5\u76F4\u63A5\u5904\u7406\uFF0C \u5F53\u5904\u7406\u5B8C\u4E00\u4E2A\u8282\u70B9\u4E4B\u540E\uFF0C\u4F9D\u8D56\u8FD9\u4E2A\u8282\u70B9\u7684\u4E8B\u60C5\u5C31\u53EF\u4EE5\u51CF\u53BB\u4E00\u4E2A\u4F9D\u8D56\u9879\uFF0C\u5982\u679C\u521A\u597D\u51CF\u5230\u6CA1\u6709\u4F9D\u8D56\u4E86\uFF0C\u90A3\u4E48\u4E5F\u53EF\u4EE5\u5904\u7406\u4E86\u3002 \u53EF\u4EE5\u901A\u8FC7\u961F\u5217\u4FDD\u5B58\u53EF\u4EE5\u76F4\u63A5\u5904\u7406\u7684\u70B9\uFF0C\u5F53\u961F\u5217\u4E3A\u7A7A\u7684\u65F6\u5019\uFF0C\u5904\u7406\u7ED3\u675F\u3002</p><h2 id="\u4EE3\u7801\u5B9E\u73B0" tabindex="-1"><a class="header-anchor" href="#\u4EE3\u7801\u5B9E\u73B0" aria-hidden="true">#</a> \u4EE3\u7801\u5B9E\u73B0</h2><div class="language-java ext-java line-numbers-mode"><pre class="language-java"><code><span class="token comment">//\u5C31\u8FD9\u4E2A\u9898\u76EE\u6765\u8BF4\uFF0C\u5165\u53C2\u6709\`numCourses\`\u8BFE\u7A0B\u603B\u6570\uFF0C\`prerequisites\` \u8868\u793A\u8BFE\u7A0B\u4F9D\u8D56</span>
<span class="token keyword">public</span> <span class="token keyword">boolean</span> <span class="token function">canFinish</span><span class="token punctuation">(</span><span class="token keyword">int</span> numCourses<span class="token punctuation">,</span> <span class="token keyword">int</span><span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">[</span><span class="token punctuation">]</span> prerequisites<span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token comment">//\u62D3\u6251\u6392\u5E8F</span>
    <span class="token comment">//\u5148\u8981\u6784\u9020\u62D3\u6251\u3002\u7136\u540E\u627E\u5230\u5165\u5EA6\u4E3A0\u7684\u8BFE</span>
    <span class="token keyword">int</span><span class="token punctuation">[</span><span class="token punctuation">]</span> indrgree<span class="token operator">=</span><span class="token keyword">new</span> <span class="token keyword">int</span><span class="token punctuation">[</span>numCourses<span class="token punctuation">]</span><span class="token punctuation">;</span>
    <span class="token comment">//\u8FD9\u4E2A\u662F\u9898\u76EE\u9700\u8981\uFF0C\u4E00\u822C\u9879\u76EE\u4E0D\u9700\u8981\uFF0C\u7528\u4E8E\u4FDD\u5B58\u67D0\u4E00\u4E2A\u79D1\u76EE\u7684\u4F9D\u8D56\u79D1\u76EE\uFF0C\u53EF\u80FD\u6709\u5F88\u591A\uFF0C\u6240\u4EE5\u9009\u62E9\u5217\u8868</span>
    <span class="token class-name">List</span><span class="token generics"><span class="token punctuation">&lt;</span><span class="token class-name">List</span><span class="token punctuation">&lt;</span><span class="token class-name">Integer</span><span class="token punctuation">&gt;</span><span class="token punctuation">&gt;</span></span> edge<span class="token operator">=</span><span class="token keyword">new</span> <span class="token class-name">ArrayList</span><span class="token generics"><span class="token punctuation">&lt;</span><span class="token punctuation">&gt;</span></span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token keyword">for</span><span class="token punctuation">(</span><span class="token keyword">int</span> i<span class="token operator">=</span><span class="token number">0</span><span class="token punctuation">;</span>i<span class="token operator">&lt;</span>numCourses<span class="token punctuation">;</span>i<span class="token operator">++</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
        <span class="token comment">//\u521D\u59CB\u5316\u5217\u8868</span>
        edge<span class="token punctuation">.</span><span class="token function">add</span><span class="token punctuation">(</span><span class="token keyword">new</span> <span class="token class-name">ArrayList</span><span class="token generics"><span class="token punctuation">&lt;</span><span class="token punctuation">&gt;</span></span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>

    <span class="token keyword">for</span><span class="token punctuation">(</span><span class="token keyword">int</span><span class="token punctuation">[</span><span class="token punctuation">]</span> temp<span class="token operator">:</span> prerequisites<span class="token punctuation">)</span><span class="token punctuation">{</span>
        <span class="token comment">//\u4FDD\u5B58\u6BCF\u4E2A\u79D1\u76EE\u7684\u4F9D\u8D56\u6570\u76EE</span>
        indrgree<span class="token punctuation">[</span>temp<span class="token punctuation">[</span><span class="token number">0</span><span class="token punctuation">]</span><span class="token punctuation">]</span><span class="token operator">++</span><span class="token punctuation">;</span>
        edge<span class="token punctuation">.</span><span class="token function">get</span><span class="token punctuation">(</span>temp<span class="token punctuation">[</span><span class="token number">1</span><span class="token punctuation">]</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">add</span><span class="token punctuation">(</span>temp<span class="token punctuation">[</span><span class="token number">0</span><span class="token punctuation">]</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>

    <span class="token class-name">Queue</span><span class="token generics"><span class="token punctuation">&lt;</span><span class="token class-name">Integer</span><span class="token punctuation">&gt;</span></span> queue<span class="token operator">=</span><span class="token keyword">new</span> <span class="token class-name">ArrayDeque</span><span class="token generics"><span class="token punctuation">&lt;</span><span class="token punctuation">&gt;</span></span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token keyword">for</span><span class="token punctuation">(</span><span class="token keyword">int</span> i<span class="token operator">=</span><span class="token number">0</span><span class="token punctuation">;</span>i<span class="token operator">&lt;</span>numCourses<span class="token punctuation">;</span>i<span class="token operator">++</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
        <span class="token keyword">if</span><span class="token punctuation">(</span>indrgree<span class="token punctuation">[</span>i<span class="token punctuation">]</span><span class="token operator">==</span><span class="token number">0</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
            <span class="token comment">//\u4FDD\u5B58\u6CA1\u6709\u4F9D\u8D56\u7684\u79D1\u76EE</span>
            queue<span class="token punctuation">.</span><span class="token function">offer</span><span class="token punctuation">(</span>i<span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token punctuation">}</span>
    <span class="token punctuation">}</span>
    <span class="token keyword">int</span> index<span class="token operator">=</span><span class="token number">0</span><span class="token punctuation">;</span>
    <span class="token keyword">while</span><span class="token punctuation">(</span><span class="token operator">!</span> queue<span class="token punctuation">.</span><span class="token function">isEmpty</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
        index<span class="token operator">++</span><span class="token punctuation">;</span>
        <span class="token comment">//\u53D6\u51FA\u6CA1\u6709\u4F9D\u8D56\u7684\u79D1\u76EE</span>
        <span class="token keyword">int</span> cur<span class="token operator">=</span>queue<span class="token punctuation">.</span><span class="token function">poll</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token comment">//\u5FAA\u73AF\u4F9D\u8D56\u8FD9\u4E2A\u79D1\u76EE\u7684\u5217\u8868\uFF0C\u5F53\u5904\u7406\u5B8Ccur,\u5217\u8868\u4E2D\u7684\u6BCF\u4E00\u4E2A\u79D1\u76EE\u7684\u4F9D\u8D56\u6570\u90FD\u51CF1</span>
        <span class="token keyword">for</span><span class="token punctuation">(</span><span class="token keyword">int</span> v<span class="token operator">:</span> edge<span class="token punctuation">.</span><span class="token function">get</span><span class="token punctuation">(</span>cur<span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
            indrgree<span class="token punctuation">[</span>v<span class="token punctuation">]</span><span class="token operator">--</span><span class="token punctuation">;</span>
            <span class="token keyword">if</span><span class="token punctuation">(</span>indrgree<span class="token punctuation">[</span>v<span class="token punctuation">]</span><span class="token operator">==</span><span class="token number">0</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
                queue<span class="token punctuation">.</span><span class="token function">offer</span><span class="token punctuation">(</span>v<span class="token punctuation">)</span><span class="token punctuation">;</span>
            <span class="token punctuation">}</span>
        <span class="token punctuation">}</span>
    <span class="token punctuation">}</span>
    <span class="token keyword">return</span> index<span class="token operator">==</span>numCourses<span class="token punctuation">;</span>

<span class="token punctuation">}</span>

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,5);function m(b,h){const a=i("ExternalLinkIcon");return t(),p("div",null,[u,r,n("p",null,[n("a",k,[d,o(a)])]),v])}var w=e(l,[["render",m],["__file","\u62D3\u6251\u6392\u5E8F.html.vue"]]);export{w as default};
