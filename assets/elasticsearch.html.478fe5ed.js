import{_ as o}from"./plugin-vue_export-helper.21dcd24c.js";import{o as p,c as l,a as s,b as e,e as t,d as n,r as i}from"./app.71d4843f.js";var c="/img/docker/el-single.png",r="/img/docker/postman-es-1.png",u="/img/docker/cerebro.png",d="/img/docker/cerebro-main.png";const v={},k=t(`<h1 id="elasticsearch-docker-m1\u73AF\u5883\u90E8\u7F72" tabindex="-1"><a class="header-anchor" href="#elasticsearch-docker-m1\u73AF\u5883\u90E8\u7F72" aria-hidden="true">#</a> ElasticSearch Docker M1\u73AF\u5883\u90E8\u7F72</h1><h2 id="\u5355\u673A\u90E8\u7F72" tabindex="-1"><a class="header-anchor" href="#\u5355\u673A\u90E8\u7F72" aria-hidden="true">#</a> \u5355\u673A\u90E8\u7F72</h2><p>\u65B0\u5EFAdocker-compose.yml\u6587\u4EF6\uFF0C\u590D\u5236\u4E0B\u9762\u5185\u5BB9\u5230\u6587\u4EF6\u4FDD\u5B58</p><ol><li><em>volumes</em>\u91CC\u7684\u8DEF\u5F84\u8981\u66FF\u6362\u6210\u81EA\u5DF1\u672C\u673A\u7684\u8DEF\u5F84\uFF0C\u53EF\u4EE5\u65B0\u5EFA\u4E24\u4E2A\u76EE\u5F55\u653Ees\u6587\u4EF6\u548C\u63D2\u4EF6\uFF0C\u65B9\u4FBF\u90E8\u7F72\u65B0\u63D2\u4EF6</li><li>\u8981\u6307\u5B9A\u7F51\u7EDC\uFF0C\u8FD9\u6837\u5B89\u88C5\u522B\u7684\u6A21\u5757\u624D\u80FD\u4E00\u8D77\u901A\u4FE1</li></ol><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code> ~/workspace/docker/data/es/es <span class="token function">cat</span> docker-compose.yml
version: <span class="token string">&#39;3.8&#39;</span>
services:
  es:
    image: docker.elastic.co/elasticsearch/elasticsearch:7.17.5-arm64
    container_name: es
    ports:
      - <span class="token string">&quot;9200:9200&quot;</span>
      - <span class="token string">&quot;9300:9300&quot;</span>
    volumes:
      - /Users/XXX/workspace/docker/data/es/es-data:/usr/share/elasticsearch/data
      - /Users/XXX/workspace/docker/data/es/es-plugins:/usr/share/elasticsearch/plugins
    environment:
      - <span class="token assign-left variable">ES_JAVA_OPTS</span><span class="token operator">=</span>-Xms512m -Xmx512m
      - discovery.type<span class="token operator">=</span>single-node
    networks:
      - es-net

networks:
  es-net:
    driver: bridge
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="\u6253\u5F00\u672C\u5730\u6D4F\u89C8\u5668\u67E5\u770B\u9875\u9762" tabindex="-1"><a class="header-anchor" href="#\u6253\u5F00\u672C\u5730\u6D4F\u89C8\u5668\u67E5\u770B\u9875\u9762" aria-hidden="true">#</a> \u6253\u5F00\u672C\u5730\u6D4F\u89C8\u5668\u67E5\u770B\u9875\u9762</h2>`,6),m={href:"http://localhost:9200/",target:"_blank",rel:"noopener noreferrer"},b=n("http://localhost:9200/"),q=n(),h=s("br",null,null,-1),_=t('<p><img src="'+c+`" alt="" loading="lazy"></p><h2 id="\u96C6\u7FA4\u90E8\u7F72" tabindex="-1"><a class="header-anchor" href="#\u96C6\u7FA4\u90E8\u7F72" aria-hidden="true">#</a> \u96C6\u7FA4\u90E8\u7F72</h2><p>\u65B0\u5EFAdocker-compose.yml\u6587\u4EF6\uFF0C\u590D\u5236\u4E0B\u9762\u5185\u5BB9\u5230\u6587\u4EF6\u4FDD\u5B58</p><ol><li><em>volumes</em>\u91CC\u7684\u8DEF\u5F84\u8981\u66FF\u6362\u6210\u81EA\u5DF1\u672C\u673A\u7684\u8DEF\u5F84\uFF0C\u53EF\u4EE5\u50CF\u5355\u673A\u90E8\u7F72\u4E00\u6837\u6302\u8F7D\u4E24\u4E2A\u8DEF\u5F84\uFF0C\u8FD9\u91CC\u4E3A\u4E86\u65B9\u4FBF\u5C31\u4F7F\u7528\u4E00\u4E2A</li><li>\u8981\u6307\u5B9A\u7F51\u7EDC\uFF0C\u8FD9\u6837\u5B89\u88C5\u522B\u7684\u6A21\u5757\u624D\u80FD\u4E00\u8D77\u901A\u4FE1</li></ol><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code>  ~/workspace/docker/data/es/es-cluster  <span class="token function">cat</span> docker-compose.yml
version: <span class="token string">&#39;3.8&#39;</span>
services:
  es01: <span class="token comment">##\u670D\u52A1\u540D\u79F0\uFF0C\u6BCF\u4E2Aes\u90FD\u4E0D\u4E00\u6837</span>
    image: docker.elastic.co/elasticsearch/elasticsearch:7.17.5-arm64
    container_name: es01  
    ports:
      - <span class="token string">&quot;9203:9200&quot;</span>
    volumes:
      - /Users/XXX/workspace/docker/data/es/es-cluster/data01:/usr/share/elasticsearch/data
    environment:
      - <span class="token assign-left variable">ES_JAVA_OPTS</span><span class="token operator">=</span>-Xms512m -Xmx512m <span class="token comment">## JAVA \u5185\u5B58</span>
      - cluster.name<span class="token operator">=</span>es-docker-cluster  <span class="token comment">## \u96C6\u7FA4\u540D\u79F0\uFF0C\u6240\u6709\u5728\u4E00\u4E2A\u96C6\u7FA4\u91CC\u9762\u7684\u673A\u5668\u90FD\u662F\u540C\u4E00\u4E2A\u540D\u5B57</span>
      - node.name<span class="token operator">=</span>es01  <span class="token comment">## \u8282\u70B9\u540D\u79F0</span>
      - discovery.seed_hosts<span class="token operator">=</span>es02,es03
      - cluster.initial_master_nodes<span class="token operator">=</span>es01,es02,es03 <span class="token comment">## \u5728\u8FD9\u51E0\u4E2A\u8282\u70B9\u91CC\u9009master\u8282\u70B9</span>
    networks:
      - elastic
  es02:
    image: docker.elastic.co/elasticsearch/elasticsearch:7.17.5-arm64
    container_name: es02
    ports:
      - <span class="token string">&quot;9201:9200&quot;</span>
    volumes:
      - /Users/XXX/workspace/docker/data/es/es-cluster/data02:/usr/share/elasticsearch/data
    environment:
      - <span class="token assign-left variable">ES_JAVA_OPTS</span><span class="token operator">=</span>-Xms512m -Xmx512m
      - cluster.name<span class="token operator">=</span>es-docker-cluster
      - node.name<span class="token operator">=</span>es02
      - discovery.seed_hosts<span class="token operator">=</span>es01,es03
      - cluster.initial_master_nodes<span class="token operator">=</span>es01,es02,es03
    networks:
      - elastic
  es03:
    image: docker.elastic.co/elasticsearch/elasticsearch:7.17.5-arm64
    container_name: es03
    ports:
      - <span class="token string">&quot;9202:9200&quot;</span>
    volumes:
      - /Users/XXX/workspace/docker/data/es/es-cluster/data03:/usr/share/elasticsearch/data
    environment:
      - <span class="token assign-left variable">ES_JAVA_OPTS</span><span class="token operator">=</span>-Xms512m -Xmx512m 
      - cluster.name<span class="token operator">=</span>es-docker-cluster
      - node.name<span class="token operator">=</span>es03
      - discovery.seed_hosts<span class="token operator">=</span>es02,es01
      - cluster.initial_master_nodes<span class="token operator">=</span>es01,es02,es03
    networks:
      - elastic
networks:
  elastic:
    driver: bridge
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="\u6D4B\u8BD5\u96C6\u7FA4" tabindex="-1"><a class="header-anchor" href="#\u6D4B\u8BD5\u96C6\u7FA4" aria-hidden="true">#</a> \u6D4B\u8BD5\u96C6\u7FA4</h2><h3 id="\u901A\u8FC7postman\u6D4B\u8BD5" tabindex="-1"><a class="header-anchor" href="#\u901A\u8FC7postman\u6D4B\u8BD5" aria-hidden="true">#</a> \u901A\u8FC7PostMan\u6D4B\u8BD5</h3><ol><li>\u6DFB\u52A0\u7D22\u5F15\u5E93<br></li></ol><ul><li>\u8BF7\u6C42\u65B9\u5F0F <code>PUT</code></li><li>\u8BF7\u6C42\u94FE\u63A5 <code>localhost:9201/test3</code>\uFF0C\u628Atest3\u6362\u6210\u4F60\u6307\u5B9A\u7684\u7D22\u5F15\u5E93\u540D\u79F0</li><li>\u8BF7\u6C42\u4F53\uFF0C\u6307\u5B9A\u4E09\u4E2Ashards\u548C1\u4E2A\u5907\u4EFD</li></ul><div class="language-json ext-json line-numbers-mode"><pre class="language-json"><code><span class="token punctuation">{</span>
  <span class="token property">&quot;mappings&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>
    <span class="token property">&quot;properties&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>
      <span class="token property">&quot;name&quot;</span><span class="token operator">:</span><span class="token punctuation">{</span>
        <span class="token property">&quot;type&quot;</span><span class="token operator">:</span> <span class="token string">&quot;text&quot;</span>
      <span class="token punctuation">}</span>
    <span class="token punctuation">}</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token property">&quot;settings&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>
    <span class="token property">&quot;number_of_shards&quot;</span><span class="token operator">:</span> <span class="token number">3</span><span class="token punctuation">,</span>
    <span class="token property">&quot;number_of_replicas&quot;</span><span class="token operator">:</span> <span class="token number">1</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><img src="`+r+`" alt="" loading="lazy"> 2. \u6DFB\u52A03\u6761\u6570\u636E</p><ul><li>\u8BF7\u6C42\u65B9\u5F0F <code>POST</code></li><li>\u8BF7\u6C42\u94FE\u63A5 <code>localhost:9201/test3/_doc/\u66FF\u6362\u6210\u6307\u5B9AID</code></li><li>\u8BF7\u6C42\u4F53</li></ul><div class="language-json ext-json line-numbers-mode"><pre class="language-json"><code><span class="token punctuation">{</span>
  <span class="token property">&quot;name&quot;</span><span class="token operator">:</span> <span class="token string">&quot;\u8FD9\u4E2A\u662F1&quot;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ol start="3"><li>\u67E5\u8BE2\u6570\u636E\u6240\u5728shard</li></ol><ul><li>\u8BF7\u6C42\u65B9\u5F0F <code>GET</code></li><li>\u8BF7\u6C42\u94FE\u63A5 <code>localhost:9201/test3/_search</code></li><li>\u8BF7\u6C42\u4F53\uFF0C\u6DFB\u52A0<code>&quot;explain&quot;: true</code>\u8FD4\u56DE\u6240\u5728shard</li></ul><div class="language-json ext-json line-numbers-mode"><pre class="language-json"><code><span class="token comment">// \u8BF7\u6C42\u4F53</span>
<span class="token punctuation">{</span>
  <span class="token property">&quot;query&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>
    <span class="token property">&quot;match_all&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span><span class="token punctuation">}</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
   <span class="token property">&quot;explain&quot;</span><span class="token operator">:</span> <span class="token boolean">true</span>
<span class="token punctuation">}</span>
<span class="token comment">//\u8FD4\u56DE\u7ED3\u679C</span>
<span class="token punctuation">{</span>
    <span class="token property">&quot;took&quot;</span><span class="token operator">:</span> <span class="token number">987</span><span class="token punctuation">,</span>
    <span class="token property">&quot;timed_out&quot;</span><span class="token operator">:</span> <span class="token boolean">false</span><span class="token punctuation">,</span>
    <span class="token property">&quot;_shards&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>
        <span class="token property">&quot;total&quot;</span><span class="token operator">:</span> <span class="token number">3</span><span class="token punctuation">,</span>
        <span class="token property">&quot;successful&quot;</span><span class="token operator">:</span> <span class="token number">3</span><span class="token punctuation">,</span>
        <span class="token property">&quot;skipped&quot;</span><span class="token operator">:</span> <span class="token number">0</span><span class="token punctuation">,</span>
        <span class="token property">&quot;failed&quot;</span><span class="token operator">:</span> <span class="token number">0</span>
    <span class="token punctuation">}</span><span class="token punctuation">,</span>
    <span class="token property">&quot;hits&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>
        <span class="token property">&quot;total&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>
            <span class="token property">&quot;value&quot;</span><span class="token operator">:</span> <span class="token number">3</span><span class="token punctuation">,</span>
            <span class="token property">&quot;relation&quot;</span><span class="token operator">:</span> <span class="token string">&quot;eq&quot;</span>
        <span class="token punctuation">}</span><span class="token punctuation">,</span>
        <span class="token property">&quot;max_score&quot;</span><span class="token operator">:</span> <span class="token number">1.0</span><span class="token punctuation">,</span>
        <span class="token property">&quot;hits&quot;</span><span class="token operator">:</span> <span class="token punctuation">[</span>
            <span class="token punctuation">{</span>
                <span class="token property">&quot;_shard&quot;</span><span class="token operator">:</span> <span class="token string">&quot;[test3][0]&quot;</span><span class="token punctuation">,</span> <span class="token comment">//\u4F4D\u4E8E\u30100\u3011</span>
                <span class="token property">&quot;_node&quot;</span><span class="token operator">:</span> <span class="token string">&quot;LsAEKFZCSku6wJ4K8lmYpg&quot;</span><span class="token punctuation">,</span>
                <span class="token property">&quot;_index&quot;</span><span class="token operator">:</span> <span class="token string">&quot;test3&quot;</span><span class="token punctuation">,</span>
                <span class="token property">&quot;_type&quot;</span><span class="token operator">:</span> <span class="token string">&quot;_doc&quot;</span><span class="token punctuation">,</span>
                <span class="token property">&quot;_id&quot;</span><span class="token operator">:</span> <span class="token string">&quot;5&quot;</span><span class="token punctuation">,</span>
                <span class="token property">&quot;_score&quot;</span><span class="token operator">:</span> <span class="token number">1.0</span><span class="token punctuation">,</span>
                <span class="token property">&quot;_source&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>
                    <span class="token property">&quot;name&quot;</span><span class="token operator">:</span> <span class="token string">&quot;\u8FD9\u4E2A\u662F5&quot;</span>
                <span class="token punctuation">}</span><span class="token punctuation">,</span>
                <span class="token property">&quot;_explanation&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>
                    <span class="token property">&quot;value&quot;</span><span class="token operator">:</span> <span class="token number">1.0</span><span class="token punctuation">,</span>
                    <span class="token property">&quot;description&quot;</span><span class="token operator">:</span> <span class="token string">&quot;*:*&quot;</span><span class="token punctuation">,</span>
                    <span class="token property">&quot;details&quot;</span><span class="token operator">:</span> <span class="token punctuation">[</span><span class="token punctuation">]</span>
                <span class="token punctuation">}</span>
            <span class="token punctuation">}</span><span class="token punctuation">,</span>
            <span class="token punctuation">{</span>
                <span class="token property">&quot;_shard&quot;</span><span class="token operator">:</span> <span class="token string">&quot;[test3][1]&quot;</span><span class="token punctuation">,</span><span class="token comment">//\u4F4D\u4E8E\u30101\u3011</span>
                <span class="token property">&quot;_node&quot;</span><span class="token operator">:</span> <span class="token string">&quot;q3aJXnFDSrawbqAyEVv4AQ&quot;</span><span class="token punctuation">,</span>
                <span class="token property">&quot;_index&quot;</span><span class="token operator">:</span> <span class="token string">&quot;test3&quot;</span><span class="token punctuation">,</span>
                <span class="token property">&quot;_type&quot;</span><span class="token operator">:</span> <span class="token string">&quot;_doc&quot;</span><span class="token punctuation">,</span>
                <span class="token property">&quot;_id&quot;</span><span class="token operator">:</span> <span class="token string">&quot;3&quot;</span><span class="token punctuation">,</span>
                <span class="token property">&quot;_score&quot;</span><span class="token operator">:</span> <span class="token number">1.0</span><span class="token punctuation">,</span>
                <span class="token property">&quot;_source&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>
                    <span class="token property">&quot;name&quot;</span><span class="token operator">:</span> <span class="token string">&quot;\u8FD9\u4E2A\u662F3&quot;</span>
                <span class="token punctuation">}</span><span class="token punctuation">,</span>
                <span class="token property">&quot;_explanation&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>
                    <span class="token property">&quot;value&quot;</span><span class="token operator">:</span> <span class="token number">1.0</span><span class="token punctuation">,</span>
                    <span class="token property">&quot;description&quot;</span><span class="token operator">:</span> <span class="token string">&quot;*:*&quot;</span><span class="token punctuation">,</span>
                    <span class="token property">&quot;details&quot;</span><span class="token operator">:</span> <span class="token punctuation">[</span><span class="token punctuation">]</span>
                <span class="token punctuation">}</span>
            <span class="token punctuation">}</span><span class="token punctuation">,</span>
            <span class="token punctuation">{</span>
                <span class="token property">&quot;_shard&quot;</span><span class="token operator">:</span> <span class="token string">&quot;[test3][2]&quot;</span><span class="token punctuation">,</span><span class="token comment">//\u4F4D\u4E8E\u30102\u3011</span>
                <span class="token property">&quot;_node&quot;</span><span class="token operator">:</span> <span class="token string">&quot;q3aJXnFDSrawbqAyEVv4AQ&quot;</span><span class="token punctuation">,</span>
                <span class="token property">&quot;_index&quot;</span><span class="token operator">:</span> <span class="token string">&quot;test3&quot;</span><span class="token punctuation">,</span>
                <span class="token property">&quot;_type&quot;</span><span class="token operator">:</span> <span class="token string">&quot;_doc&quot;</span><span class="token punctuation">,</span>
                <span class="token property">&quot;_id&quot;</span><span class="token operator">:</span> <span class="token string">&quot;1&quot;</span><span class="token punctuation">,</span>
                <span class="token property">&quot;_score&quot;</span><span class="token operator">:</span> <span class="token number">1.0</span><span class="token punctuation">,</span>
                <span class="token property">&quot;_source&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>
                    <span class="token property">&quot;name&quot;</span><span class="token operator">:</span> <span class="token string">&quot;\u8FD9\u4E2A\u662F1&quot;</span>
                <span class="token punctuation">}</span><span class="token punctuation">,</span>
                <span class="token property">&quot;_explanation&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>
                    <span class="token property">&quot;value&quot;</span><span class="token operator">:</span> <span class="token number">1.0</span><span class="token punctuation">,</span>
                    <span class="token property">&quot;description&quot;</span><span class="token operator">:</span> <span class="token string">&quot;*:*&quot;</span><span class="token punctuation">,</span>
                    <span class="token property">&quot;details&quot;</span><span class="token operator">:</span> <span class="token punctuation">[</span><span class="token punctuation">]</span>
                <span class="token punctuation">}</span>
            <span class="token punctuation">}</span>
        <span class="token punctuation">]</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="\u901A\u8FC7cerebro\u6D4B\u8BD5" tabindex="-1"><a class="header-anchor" href="#\u901A\u8FC7cerebro\u6D4B\u8BD5" aria-hidden="true">#</a> \u901A\u8FC7cerebro\u6D4B\u8BD5</h3>`,17),g=n("\u5728GitHub\u4E0B\u8F7D "),y={href:"https://github.com/lmenezes/cerebro/releases",target:"_blank",rel:"noopener noreferrer"},x=n("Cerebro\u6700\u65B0\u7248\u672C"),f=n(),X=s("br",null,null,-1),w=n(" \u4E0B\u8F7D\u89E3\u538B\u4E4B\u540E\u8FD0\u884C"),A=s("code",null,"/bin/cerebro",-1),S=n(),E=s("br",null,null,-1),V=n(" \u6253\u5F00\u672C\u5730\u6D4F\u89C8\u5668\u9875\u9762"),j=s("code",null,"http://localhost:9000/#!/connect",-1),J=n(),T=s("br",null,null,-1),P=n(" \u8F93\u5165\u96C6\u7FA4\u7684\u67D0\u4E00\u4E2A\u5730\u5740,\u6BD4\u5982"),U=s("code",null,"http://localhost:9201",-1),z=n(",\u70B9\u51FB\u8FDE\u63A5 "),O=s("br",null,null,-1),D=n(" \u5C31\u53EF\u4EE5\u770B\u5230\u96C6\u7FA4\u4E2D\u7684\u4FE1\u606F"),N=s("p",null,[s("img",{src:u,alt:"",loading:"lazy"}),s("img",{src:d,alt:"",loading:"lazy"})],-1);function B(C,F){const a=i("ExternalLinkIcon");return p(),l("div",null,[k,s("p",null,[s("a",m,[b,e(a)]),q,h]),_,s("p",null,[g,s("a",y,[x,e(a)]),f,X,w,A,S,E,V,j,J,T,P,U,z,O,D]),N])}var G=o(v,[["render",B],["__file","elasticsearch.html.vue"]]);export{G as default};
