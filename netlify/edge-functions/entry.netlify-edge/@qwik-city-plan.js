import{c as r,i as a,u as c,j as e,_ as o,a as g,b as v,d as m,e as t,F as h,f,R as j}from"./assets/index.qwik-bae8468a.js";const w=`nav.navbar{background:rgb(0,122,204)}.navbar-brand>a.navbar-item:hover{background-color:transparent}.logo_pre{color:#fff;padding:5px;font-size:30px;background-color:#000;border-top-left-radius:7px;border-bottom-left-radius:7px}.logo_post{color:#000;background-color:#f90;padding:5px 10px;border-top-right-radius:7px;border-bottom-right-radius:7px;font-size:30px}
`,y=r(a(()=>(c(a(w,"s_N39ca0w8E8Y")),e("nav",{class:"navbar is-white",children:e("div",{class:"container",children:[e("div",{class:"navbar-brand",children:e("a",{class:"navbar-item brand-text",href:"/",children:[e("span",{class:"logo_pre",children:"JS"}),e("span",{class:"logo_post",children:"IQ"})]})}),e("div",{id:"navMenu",class:"navbar-menu",children:e("div",{class:"navbar-end",children:e("div",{class:"navbar-item",children:e("a",{class:"github-button",href:"https://github.com/stefanodotit/jsiq","data-color-scheme":"no-preference: dark; light: dark; dark: dark;","data-icon":"octicon-star","data-size":"large","data-show-count":"true","aria-label":"Star stefanodotit/jsiq on GitHub",children:"Star"})})})})]})})),"s_ceU05TscGYE")),k=`footer{background:rgb(0,122,204);text-align:center;color:#ccc;font-weight:700;display:flex;justify-content:center;align-items:center}
`,x=r(a(()=>(c(a(k,"s_BaeWcGitn20")),e("footer",{children:["Made with ",e("img",{height:"20px",width:"20px",src:"/hearth.gif"})]})),"s_3lb9EjxI5sA")),S=`main{height:100%;display:flex;flex-direction:column}section{flex:1;overflow:hidden}.container,.columns{height:100%}.column{overflow-y:scroll}.boxPlaceholder{display:flex;align-items:center;justify-content:center;height:100%;width:100%}
`,p=n=>n.toLowerCase().trim().replace(/&/g,"and").replace(/\|/g,"or").replace(/[^\w\s-]/g,"").replace(/[\s_-]+/g,"-").replace(/^-+|-+$/g,""),C=`.menu-list a{color:#ccc}.menu-list a.is-active{background-color:#0e639c;font-weight:700}.menu-list a:hover{background-color:#37373d}.menu-label{color:#ccc;text-align:center;margin-top:5px;font-weight:700}
`,I=r(a(n=>{const i=n.data,s=n.slug;return c(a(C,"s_cuYSrO12axk")),e("div",{class:"menu",children:[e("p",{class:"menu-label is-size-5",children:"Questions"}),e("ul",{class:"menu-list",children:i.map(l=>e("li",{children:e("a",{class:s&&p(l.question)==s?"is-active":"",href:`/question/${p(l.question)}`,children:o(l,"question")})}))})]})},"s_XUTIfxOXRtQ")),u=[{question:"What's the difference between undefined and null?",answer:`<p>Before understanding the differences between&nbsp;<code class='language-javascript'>undefined</code>&nbsp;and&nbsp;<code class='language-javascript'>null</code>&nbsp;we must understand the similarities between them.</p>
<ul>
<li>They belong to&nbsp;<strong>JavaScript's</strong>&nbsp;7 primitive types.</li>
</ul>
<div class="highlight">
<pre class="highlight javascript"><code class='language-javascript'> let primitiveTypes = ['string','number','null','undefined','boolean','symbol', 'bigint'];
</code></pre>
</div>
<ul>
<li>They are&nbsp;<strong>falsy</strong>&nbsp;values. Values that evaluated to false when converting it to boolean using&nbsp;<code class='language-javascript'>Boolean(value)</code>&nbsp;or&nbsp;<code class='language-javascript'>!!value</code>.</li>
</ul>
<div class="highlight">
<pre class="highlight javascript"><code class='language-javascript'>   console.log(!!null); //logs false
   console.log(!!undefined); //logs false

   console.log(Boolean(null)); //logs false
   console.log(Boolean(undefined)); //logs false
</code></pre>
</div>
<p>Ok, let's talk about the differences.</p>
<ul>
<li><code class='language-javascript'>undefined</code>&nbsp;is the default value of a variable that has not been assigned a specific value. Or a function that has no&nbsp;<strong>explicit</strong>&nbsp;return value ex.&nbsp;<code class='language-javascript'>console.log(1)</code>. Or a property that does not exist in an object. The JavaScript engine does this for us the&nbsp;<strong>assigning</strong>&nbsp;of&nbsp;<code class='language-javascript'>undefined</code>&nbsp;value.</li>
</ul>
<div class="highlight">
<pre class="highlight javascript"><code class='language-javascript'>  let _thisIsUndefined;
  const doNothing = () =&gt; {};
  const someObj = {
    a : "ay",
    b : "bee",
    c : "si"
  };

  console.log(_thisIsUndefined); //logs undefined
  console.log(doNothing()); //logs undefined
  console.log(someObj["d"]); //logs undefined
</code></pre>
</div>
<ul>
<li><code class='language-javascript'>null</code>&nbsp;is&nbsp;<strong>"a value that represents no value"</strong>.&nbsp;<code class='language-javascript'>null</code>&nbsp;is value that has been&nbsp;<strong>explicitly</strong>&nbsp;defined to a variable. In this example we get a value of&nbsp;<code class='language-javascript'>null</code>&nbsp;when the&nbsp;<code class='language-javascript'>fs.readFile</code>&nbsp;method does not throw an error.</li>
</ul>
<div class="highlight">
<pre class="highlight javascript"><code class='language-javascript'>  fs.readFile('path/to/file', (e,data) =&gt; {
     console.log(e); //it logs null when no error occurred
     if(e){
       console.log(e);
     }
     console.log(data);
   });
</code></pre>
</div>
<p>When comparing&nbsp;<code class='language-javascript'>null</code>&nbsp;and&nbsp;<code class='language-javascript'>undefined</code>&nbsp;we get&nbsp;<code class='language-javascript'>true</code>&nbsp;when using&nbsp;<code class='language-javascript'>==</code>&nbsp;and&nbsp;<code class='language-javascript'>false</code>&nbsp;when using&nbsp;<code class='language-javascript'>===</code>. You can read the reason&nbsp;here.</p>
<div class="highlight">
<pre class="highlight javascript"><code class='language-javascript'>   console.log(null == undefined); // logs true
   console.log(null === undefined); // logs false</code></pre>
</div>`,categories:[{name:"Code",id:2}],id:1},{question:"What does the && operator do?",answer:`<p>The&nbsp;<code class='language-javascript'>&amp;&amp;</code>&nbsp;or&nbsp;<strong>Logical AND</strong>&nbsp;operator finds the first&nbsp;<em>falsy</em>&nbsp;expression in its operands and returns it and if it does not find any&nbsp;<em>falsy</em>&nbsp;expression it returns the last expression. It employs short-circuiting to prevent unnecessary work. I've used this in the&nbsp;<code class='language-javascript'>catch</code>&nbsp;block when closing database connection in one of my projects.</p>
<div class="highlight">
<pre class="highlight javascript"><code class='language-javascript'>   console.log(false &amp;&amp; 1 &amp;&amp; []); //logs false
   console.log(" " &amp;&amp; true &amp;&amp; 5); //logs 5
</code></pre>
</div>
<p>Using&nbsp;<strong>if</strong>&nbsp;statements.</p>
<div class="highlight">
<pre class="highlight javascript"><code class='language-javascript'>  const router: Router = Router();

  router.get('/endpoint', (req: Request, res: Response) =&gt; {
     let conMobile: PoolConnection;
     try {
        //do some db operations
     } catch (e) {
     if (conMobile) {
      conMobile.release();
     }
  }
});
</code></pre>
</div>
<p>Using&nbsp;<strong>&amp;&amp;</strong>&nbsp;operator.</p>
<div class="highlight">
<pre class="highlight javascript"><code class='language-javascript'>const router: Router = Router();

router.get('/endpoint', (req: Request, res: Response) =&gt; {
  let conMobile: PoolConnection;
  try {
     //do some db operations
  } catch (e) {
    conMobile &amp;&amp; conMobile.release()
  }
});</code></pre>
</div>`,categories:[{name:"Code",id:2}],id:2},{question:"What does the || operator do?",answer:`<p>The&nbsp;<code class='language-javascript'>||</code>&nbsp;or&nbsp;<strong>Logical OR</strong>&nbsp;operator finds the first&nbsp;<em>truthy</em>&nbsp;expression in its operands and returns it. This too employs short-circuiting to prevent unnecessary work. It was used before to initialize default parameter values IN functions before&nbsp;<strong>ES6 Default function parameters</strong>&nbsp;was supported.</p>
<div class="highlight">
<pre class="highlight javascript"><code class='language-javascript'>console.log(null || 1 || undefined); //logs 1

function logName(name) {
  var n = name || "Mark";
  console.log(n);
}

logName(); //logs "Mark"</code></pre>
</div>`,categories:[{name:"Code",id:2}],id:3},{question:"Is using the + or unary plus operator the fastest way in converting a string to a number?",answer:`<p>According to&nbsp;<a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Arithmetic_Operators#Unary_plus">MDN Documentation</a>&nbsp;the&nbsp;<code class='language-javascript'>+</code>&nbsp;is the fastest way of converting a string to a number because it does not perform any operations on the value if it is already a number.</p>`,categories:[{name:"Code",id:2}],id:4},{question:"What is the DOM?",answer:`<p><strong>DOM</strong>&nbsp;stands for&nbsp;<strong>Document Object Model</strong>&nbsp;is an interface (<strong>API</strong>) for HTML and XML documents. When the browser first reads (<em>parses</em>) our HTML document it creates a big object, a really big object based on the HTML document this is the&nbsp;<strong>DOM</strong>. It is a tree-like structure that is modeled from the HTML document. The&nbsp;<strong>DOM</strong>&nbsp;is used for interacting and modifying the&nbsp;<strong>DOM structure</strong>&nbsp;or specific Elements or Nodes.</p>
<p>Imagine if we have an HTML structure like this.</p>
<div class="highlight">
<pre class="highlight html"><code class='language-javascript'>&lt;!DOCTYPE html&gt;
&lt;html lang="en"&gt;

&lt;head&gt;
   &lt;meta charset="UTF-8"&gt;
   &lt;meta name="viewport" content="width=device-width, initial-scale=1.0"&gt;
   &lt;meta http-equiv="X-UA-Compatible" content="ie=edge"&gt;
   &lt;title&gt;Document Object Model&lt;/title&gt;
&lt;/head&gt;

&lt;body&gt;
   &lt;div&gt;
      &lt;p&gt;
         &lt;span&gt;&lt;/span&gt;
      &lt;/p&gt;
      &lt;label&gt;&lt;/label&gt;
      &lt;input&gt;
   &lt;/div&gt;
&lt;/body&gt;

&lt;/html&gt;

</code></pre>
</div>
<p>The&nbsp;<strong>DOM</strong>&nbsp;equivalent would be like this.<br /><a class="article-body-image-wrapper" href="https://res.cloudinary.com/practicaldev/image/fetch/s--z_mRQj0_--/c_limit%2Cf_auto%2Cfl_progressive%2Cq_auto%2Cw_880/https://thepracticaldev.s3.amazonaws.com/i/mbqphfbjfie45ynj0teo.png"><img src="https://res.cloudinary.com/practicaldev/image/fetch/s--z_mRQj0_--/c_limit%2Cf_auto%2Cfl_progressive%2Cq_auto%2Cw_880/https://thepracticaldev.s3.amazonaws.com/i/mbqphfbjfie45ynj0teo.png" alt="DOM equivalent" loading="lazy" /></a></p>
<p>The&nbsp;<code class='language-javascript'>document</code>&nbsp;object in&nbsp;<strong>JavaScript</strong>&nbsp;represents the&nbsp;<strong>DOM</strong>. It provides us many methods that we can use to selecting elements to update element contents and many more.</p>`,categories:[{name:"Code",id:2}],id:5},{question:"What is Event Propagation?",answer:`<p>When an&nbsp;<strong>event</strong>&nbsp;occurs on a&nbsp;<strong>DOM</strong>&nbsp;element, that&nbsp;<strong>event</strong>&nbsp;does not entirely occur on that just one element. In the&nbsp;<strong>Bubbling Phase</strong>, the&nbsp;<strong>event</strong>&nbsp;bubbles up or it goes to its parent, to its grandparents, to its grandparent's parent until it reaches all the way to the&nbsp;<code class='language-javascript'>window</code>&nbsp;while in the&nbsp;<strong>Capturing Phase</strong>&nbsp;the event starts from the&nbsp;<code class='language-javascript'>window</code>&nbsp;down to the element that triggered the event or the&nbsp;<code class='language-javascript'>event.target</code>.</p>
<p><strong>Event Propagation</strong>&nbsp;has&nbsp;<strong>three</strong>&nbsp;phases.</p>
<ol>
<li>Capturing Phase&nbsp;&ndash; the event starts from&nbsp;<code class='language-javascript'>window</code>&nbsp;then goes down to every element until it reaches the target element.</li>
<li>Target Phase&nbsp;&ndash; the event has reached the target element.</li>
<li>Bubbling Phase&nbsp;&ndash; the event bubbles up from the target element then goes up every element until it reaches the&nbsp;<code class='language-javascript'>window</code>.</li>
</ol>
<p><a class="article-body-image-wrapper" href="https://res.cloudinary.com/practicaldev/image/fetch/s--Azk8KRbD--/c_limit%2Cf_auto%2Cfl_progressive%2Cq_auto%2Cw_880/https://thepracticaldev.s3.amazonaws.com/i/hjayqa99iejfhbsujlqd.png"><img src="https://res.cloudinary.com/practicaldev/image/fetch/s--Azk8KRbD--/c_limit%2Cf_auto%2Cfl_progressive%2Cq_auto%2Cw_880/https://thepracticaldev.s3.amazonaws.com/i/hjayqa99iejfhbsujlqd.png" alt="Event Propagation" loading="lazy" /></a></p>`,categories:[{name:"Code",id:2}],id:6},{question:"What's Event Bubbling?",answer:`<p>When an&nbsp;<strong>event</strong>&nbsp;occurs on a&nbsp;<strong>DOM</strong>&nbsp;element, that&nbsp;<strong>event</strong>&nbsp;does not entirely occur on that just one element. In the&nbsp;<strong>Bubbling Phase</strong>, the&nbsp;<strong>event</strong>&nbsp;bubbles up or it goes to its parent, to its grandparents, to its grandparent's parent until it reaches all the way to the&nbsp;<code class='language-javascript'>window</code>.</p>
<p>If we have an example markup like this.</p>
<div class="highlight">
<pre class="highlight html"><code class='language-javascript'> &lt;div class="grandparent"&gt;
    &lt;div class="parent"&gt;
      &lt;div class="child"&gt;1&lt;/div&gt;
    &lt;/div&gt;
  &lt;/div&gt;
</code></pre>
</div>
<p>And our js code.</p>
<div class="highlight">
<pre class="highlight javascript"><code class='language-javascript'>function addEvent(el, event, callback, isCapture = false) {
  if (!el || !event || !callback || typeof callback !== 'function') return;
  if (typeof el === 'string') {
    el = document.querySelector(el);
  };
  el.addEventListener(event, callback, isCapture);
}

addEvent(document, 'DOMContentLoaded', () =&gt; {
  const child = document.querySelector('.child');
  const parent = document.querySelector('.parent');
  const grandparent = document.querySelector('.grandparent');

  addEvent(child, 'click', function (e) {
    console.log('child');
  });

  addEvent(parent, 'click', function (e) {
    console.log('parent');
  });

  addEvent(grandparent, 'click', function (e) {
    console.log('grandparent');
  });

  addEvent(document, 'click', function (e) {
    console.log('document');
  });

  addEvent('html', 'click', function (e) {
    console.log('html');
  })

  addEvent(window, 'click', function (e) {
    console.log('window');
  })

});
</code></pre>
</div>
<p>The&nbsp;<code class='language-javascript'>addEventListener</code>&nbsp;method has a third optional parameter&nbsp;<strong>useCapture</strong>&nbsp;with a default value of&nbsp;<code class='language-javascript'>false</code>&nbsp;the event will occur in the&nbsp;<strong>Bubbling phase</strong>&nbsp;if&nbsp;<code class='language-javascript'>true</code>&nbsp;the event will occur in the&nbsp;<strong>Capturing Phase</strong>. If we click on the&nbsp;<code class='language-javascript'>child</code>&nbsp;element it logs&nbsp;<code class='language-javascript'>child</code>,<code class='language-javascript'>parent</code>,<code class='language-javascript'>grandparent</code>,&nbsp;<code class='language-javascript'>html</code>,&nbsp;<code class='language-javascript'>document</code>&nbsp;and&nbsp;<code class='language-javascript'>window</code>&nbsp;respectively on the&nbsp;<strong>console</strong>. This is&nbsp;<strong>Event Bubbling</strong>.</p>`,categories:[{name:"Code",id:2}],id:7},{question:"What's Event Capturing?",answer:`<p>When an&nbsp;<strong>event</strong>&nbsp;occurs on a&nbsp;<strong>DOM</strong>&nbsp;element, that&nbsp;<strong>event</strong>&nbsp;does not entirely occur on that just one element. In&nbsp;<strong>Capturing Phase</strong>, the event starts from the&nbsp;<code class='language-javascript'>window</code>&nbsp;all the way down to the element that triggered the event.</p>
<p>If we have an example markup like this.</p>
<div class="highlight">
<pre class="highlight html"><code class='language-javascript'> &lt;div class="grandparent"&gt;
    &lt;div class="parent"&gt;
      &lt;div class="child"&gt;1&lt;/div&gt;
    &lt;/div&gt;
  &lt;/div&gt;
</code></pre>
</div>
<p>And our js code.</p>
<div class="highlight">
<pre class="highlight javascript"><code class='language-javascript'>function addEvent(el, event, callback, isCapture = false) {
  if (!el || !event || !callback || typeof callback !== 'function') return;
  if (typeof el === 'string') {
    el = document.querySelector(el);
  };
  el.addEventListener(event, callback, isCapture);
}

addEvent(document, 'DOMContentLoaded', () =&gt; {
  const child = document.querySelector('.child');
  const parent = document.querySelector('.parent');
  const grandparent = document.querySelector('.grandparent');

  addEvent(child, 'click', function (e) {
    console.log('child');
  }, true);

  addEvent(parent, 'click', function (e) {
    console.log('parent');
  }, true);

  addEvent(grandparent, 'click', function (e) {
    console.log('grandparent');
  }, true);

  addEvent(document, 'click', function (e) {
    console.log('document');
  }, true);

  addEvent('html', 'click', function (e) {
    console.log('html');
  }, true)

  addEvent(window, 'click', function (e) {
    console.log('window');
  }, true)

});
</code></pre>
</div>
<p>The&nbsp;<code class='language-javascript'>addEventListener</code>&nbsp;method has a third optional parameter&nbsp;<strong>useCapture</strong>&nbsp;with a default value of&nbsp;<code class='language-javascript'>false</code>&nbsp;the event will occur in the&nbsp;<strong>Bubbling phase</strong>&nbsp;if&nbsp;<code class='language-javascript'>true</code>&nbsp;the event will occur in the&nbsp;<strong>Capturing Phase</strong>. If we click on the&nbsp;<code class='language-javascript'>child</code>&nbsp;element it logs&nbsp;<code class='language-javascript'>window</code>,<code class='language-javascript'>document</code>,<code class='language-javascript'>html</code>,&nbsp;<code class='language-javascript'>grandparent</code>&nbsp;and&nbsp;<code class='language-javascript'>parent</code>&nbsp;and&nbsp;<code class='language-javascript'>child</code>&nbsp;respectively on the&nbsp;<strong>console</strong>. This is&nbsp;<strong>Event Capturing</strong>.</p>`,categories:[{name:"Code",id:2}],id:8},{question:"What's the difference between event.preventDefault() and event.stopPropagation() methods?",answer:"<p>The&nbsp;<code class='language-javascript'>event.preventDefault()</code>&nbsp;method&nbsp;<strong>prevents</strong>&nbsp;the default behavior of an element. If used in a&nbsp;<code class='language-javascript'>form</code>&nbsp;element it&nbsp;<strong>prevents</strong>&nbsp;it from submitting. If used in an&nbsp;<code class='language-javascript'>anchor</code>&nbsp;element it&nbsp;<strong>prevents</strong>&nbsp;it from navigating. If used in a&nbsp;<code class='language-javascript'>contextmenu</code>&nbsp;it&nbsp;<strong>prevents</strong>&nbsp;it from showing or displaying. While the&nbsp;<code class='language-javascript'>event.stopPropagation()</code> method stops the propogation of an event or it stops the event from occurring in the bubbling or capturing phase.</p>",categories:[{name:"Code",id:2}],id:9},{question:"How to know if the event.preventDefault() method was used in an element?",answer:"<p>We can use the&nbsp;<code class='language-javascript'>event.defaultPrevented</code>&nbsp;property in the event object. It returns a&nbsp;<code class='language-javascript'>boolean</code>&nbsp;indicating if the&nbsp;<code class='language-javascript'>event.preventDefault()</code>&nbsp;was called in a particular element.</p>",categories:[{name:"Code",id:2}],id:10},{question:"Why does this code obj.someprop.x throw an error?",answer:"<p>Obviously, this throws an error due to the reason we are trying to access a<br /><code class='language-javascript'>x</code>&nbsp;property in the&nbsp;<code class='language-javascript'>someprop</code>&nbsp;property which have an&nbsp;<code class='language-javascript'>undefined</code>&nbsp;value. Remember&nbsp;<strong>properties</strong>&nbsp;in an object which does not exist in itself and its&nbsp;<strong>prototype</strong>&nbsp;has a default value of&nbsp;<code class='language-javascript'>undefined</code>&nbsp;and&nbsp;<code class='language-javascript'>undefined</code>&nbsp;has no property&nbsp;<code class='language-javascript'>x</code>.</p>",categories:[{name:"Code",id:2}],id:11},{question:"What is event.target ?",answer:`<p>In simplest terms, the&nbsp;<strong>event.target</strong>&nbsp;is the element on which the event&nbsp;<strong>occurred</strong>&nbsp;or the element that&nbsp;<strong>triggered</strong>&nbsp;the event.</p>
<p>Sample HTML Markup.</p>
<div class="highlight">
<pre class="highlight html"><code class='language-javascript'>&lt;div onclick="clickFunc(event)" style="text-align: center;margin:15px;
border:1px solid red;border-radius:3px;"&gt;
    &lt;div style="margin: 25px; border:1px solid royalblue;border-radius:3px;"&gt;
        &lt;div style="margin:25px;border:1px solid skyblue;border-radius:3px;"&gt;
          &lt;button style="margin:10px"&gt;
             Button
          &lt;/button&gt;
        &lt;/div&gt;
    &lt;/div&gt;
  &lt;/div&gt;
</code></pre>
</div>
<p>Sample JavaScript.</p>
<div class="highlight">
<pre class="highlight javascript"><code class='language-javascript'> function clickFunc(event) {
  console.log(event.target);
}
</code></pre>
</div>
<p>If you click the button it will log the&nbsp;<strong>button</strong>&nbsp;markup even though we attach the event on the outermost&nbsp;<code class='language-javascript'>div</code>&nbsp;it will always log the&nbsp;<strong>button</strong>&nbsp;so we can conclude that the&nbsp;<strong>event.target</strong>&nbsp;is the element that triggered the event.</p>`,categories:[{name:"Code",id:2}],id:12},{question:"What is event.currentTarget?",answer:`<p>The&nbsp;<strong>event.currentTarget</strong>&nbsp;is the element on which we attach the event handler&nbsp;<strong>explicitly</strong>.</p>
<p>Copying the markup in&nbsp;<strong>Question 12</strong>.<br />Sample HTML Markup.</p>
<div class="highlight">
<pre class="highlight html"><code class='language-javascript'>&lt;div onclick="clickFunc(event)" style="text-align: center;margin:15px;
border:1px solid red;border-radius:3px;"&gt;
    &lt;div style="margin: 25px; border:1px solid royalblue;border-radius:3px;"&gt;
        &lt;div style="margin:25px;border:1px solid skyblue;border-radius:3px;"&gt;
          &lt;button style="margin:10px"&gt;
             Button
          &lt;/button&gt;
        &lt;/div&gt;
    &lt;/div&gt;
  &lt;/div&gt;
</code></pre>
</div>
<p>And changing our the&nbsp;<strong>JS</strong>&nbsp;a little bit.</p>
<div class="highlight">
<pre class="highlight javascript"><code class='language-javascript'>function clickFunc(event) {
  console.log(event.currentTarget);
}
</code></pre>
</div>
<p>If you click the button it will log the outermost&nbsp;<strong>div</strong>&nbsp;markup even though we click the button. In this example, we can conclude that the&nbsp;<strong>event.currentTarget</strong>&nbsp;is the element on which we attach the event handler.</p>`,categories:[{name:"Code",id:2}],id:13},{question:"What's the difference between == and === ?",answer:`<p>The difference between&nbsp;<code class='language-javascript'>==</code><strong>(abstract equality)</strong>&nbsp;and&nbsp;<code class='language-javascript'>===</code><strong>(strict equality)</strong>&nbsp;is that the&nbsp;<code class='language-javascript'>==</code>&nbsp;compares by&nbsp;<strong>value</strong>&nbsp;after&nbsp;<em>coercion</em>&nbsp;and&nbsp;<code class='language-javascript'>===</code>&nbsp;compares by&nbsp;<strong>value</strong>&nbsp;and&nbsp;<strong>type</strong>&nbsp;without&nbsp;<em>coercion</em>.</p>
<p>Let's dig deeper on the&nbsp;<code class='language-javascript'>==</code>. So first let's talk about&nbsp;<em>coercion</em>.</p>
<p><em>coercion</em>&nbsp;is the process of converting a value to another type. As in this case, the&nbsp;<code class='language-javascript'>==</code>&nbsp;does&nbsp;<em>implicit coercion</em>. The&nbsp;<code class='language-javascript'>==</code>&nbsp;has some conditions to perform before comparing the two values.</p>
<p>Suppose we have to compare&nbsp;<code class='language-javascript'>x == y</code>&nbsp;values.</p>
<ol>
<li>If&nbsp;<code class='language-javascript'>x</code>&nbsp;and&nbsp;<code class='language-javascript'>y</code>&nbsp;have same type. Then compare them with the&nbsp;<code class='language-javascript'>===</code>&nbsp;operator.</li>
<li>If&nbsp;<code class='language-javascript'>x</code>&nbsp;is&nbsp;<code class='language-javascript'>null</code>&nbsp;and&nbsp;<code class='language-javascript'>y</code>&nbsp;is&nbsp;<code class='language-javascript'>undefined</code>&nbsp;then return&nbsp;<code class='language-javascript'>true</code>.</li>
<li>If&nbsp;<code class='language-javascript'>x</code>&nbsp;is&nbsp;<code class='language-javascript'>undefined</code>&nbsp;and&nbsp;<code class='language-javascript'>y</code>&nbsp;is&nbsp;<code class='language-javascript'>null</code>&nbsp;then return&nbsp;<code class='language-javascript'>true</code>.</li>
<li>If&nbsp;<code class='language-javascript'>x</code>&nbsp;is type&nbsp;<code class='language-javascript'>number</code>&nbsp;and&nbsp;<code class='language-javascript'>y</code>&nbsp;is type&nbsp;<code class='language-javascript'>string</code>&nbsp;Then return&nbsp;<code class='language-javascript'>x == toNumber(y)</code>.</li>
<li>If&nbsp;<code class='language-javascript'>x</code>&nbsp;is type&nbsp;<code class='language-javascript'>string</code>&nbsp;and&nbsp;<code class='language-javascript'>y</code>&nbsp;is type&nbsp;<code class='language-javascript'>number</code>&nbsp;Then return&nbsp;<code class='language-javascript'>toNumber(x) == y</code>.</li>
<li>If&nbsp;<code class='language-javascript'>x</code>&nbsp;is type&nbsp;<code class='language-javascript'>boolean</code>&nbsp;Then return&nbsp;<code class='language-javascript'>toNumber(x) == y</code>.</li>
<li>If&nbsp;<code class='language-javascript'>y</code>&nbsp;is type&nbsp;<code class='language-javascript'>boolean</code>&nbsp;Then return&nbsp;<code class='language-javascript'>x == toNumber(y)</code>.</li>
<li>If&nbsp;<code class='language-javascript'>x</code>&nbsp;is either&nbsp;<code class='language-javascript'>string</code>,<code class='language-javascript'>symbol</code>&nbsp;or&nbsp;<code class='language-javascript'>number</code>&nbsp;and&nbsp;<code class='language-javascript'>y</code>&nbsp;is type&nbsp;<code class='language-javascript'>object</code>&nbsp;Then return&nbsp;<code class='language-javascript'>x == toPrimitive(y)</code>.</li>
<li>If&nbsp;<code class='language-javascript'>x</code>&nbsp;is either&nbsp;<code class='language-javascript'>object</code>&nbsp;and&nbsp;<code class='language-javascript'>x</code>&nbsp;is either&nbsp;<code class='language-javascript'>string</code>,<code class='language-javascript'>symbol</code>&nbsp;Then return&nbsp;<code class='language-javascript'>toPrimitive(x) == y</code>.</li>
<li>Return&nbsp;<code class='language-javascript'>false</code>.</li>
</ol>
<p><strong>Note:</strong>&nbsp;<code class='language-javascript'>toPrimitive</code>&nbsp;uses first the&nbsp;<code class='language-javascript'>valueOf</code>&nbsp;method then the&nbsp;<code class='language-javascript'>toString</code>&nbsp;method in objects to get the primitive value of that object.</p>
<p>Let's have examples.</p>
<div class="table-wrapper-paragraph">
<table>
<thead>
<tr>
<th><code class='language-javascript'>x</code></th>
<th><code class='language-javascript'>y</code></th>
<th><code class='language-javascript'>x == y</code></th>
</tr>
</thead>
<tbody>
<tr>
<td><code class='language-javascript'>5</code></td>
<td><code class='language-javascript'>5</code></td>
<td><code class='language-javascript'>true</code></td>
</tr>
<tr>
<td><code class='language-javascript'>1</code></td>
<td><code class='language-javascript'>'1'</code></td>
<td><code class='language-javascript'>true</code></td>
</tr>
<tr>
<td><code class='language-javascript'>null</code></td>
<td><code class='language-javascript'>undefined</code></td>
<td><code class='language-javascript'>true</code></td>
</tr>
<tr>
<td><code class='language-javascript'>0</code></td>
<td><code class='language-javascript'>false</code></td>
<td><code class='language-javascript'>true</code></td>
</tr>
<tr>
<td><code class='language-javascript'>'1,2'</code></td>
<td><code class='language-javascript'>[1,2]</code></td>
<td><code class='language-javascript'>true</code></td>
</tr>
<tr>
<td><code class='language-javascript'>'[object Object]'</code></td>
<td><code class='language-javascript'>{}</code></td>
<td><code class='language-javascript'>true</code></td>
</tr>
</tbody>
</table>
</div>
<p>These examples all return&nbsp;<code class='language-javascript'>true</code>.</p>
<p>The&nbsp;<strong>first example</strong>&nbsp;goes to&nbsp;<strong>condition one</strong>&nbsp;because&nbsp;<code class='language-javascript'>x</code>&nbsp;and&nbsp;<code class='language-javascript'>y</code>&nbsp;have the same type and value.</p>
<p>The&nbsp;<strong>second example</strong>&nbsp;goes to&nbsp;<strong>condition four</strong>&nbsp;<code class='language-javascript'>y</code>&nbsp;is converted to a&nbsp;<code class='language-javascript'>number</code>&nbsp;before comparing.</p>
<p>The&nbsp;<strong>third example</strong>&nbsp;goes to&nbsp;<strong>condition two</strong>.</p>
<p>The&nbsp;<strong>fourth example</strong>&nbsp;goes to&nbsp;<strong>condition seven</strong>&nbsp;because&nbsp;<code class='language-javascript'>y</code>&nbsp;is&nbsp;<code class='language-javascript'>boolean</code>.</p>
<p>The&nbsp;<strong>fifth example</strong>&nbsp;goes to&nbsp;<strong>condition eight</strong>. The array is converted to a&nbsp;<code class='language-javascript'>string</code>&nbsp;using the&nbsp;<code class='language-javascript'>toString()</code>&nbsp;method which returns&nbsp;<code class='language-javascript'>1,2</code>.</p>
<p>The&nbsp;<strong>last example</strong>&nbsp;goes to&nbsp;<strong>condition ten</strong>. The object is converted to a&nbsp;<code class='language-javascript'>string</code>&nbsp;using the&nbsp;<code class='language-javascript'>toString()</code>&nbsp;method which returns&nbsp;<code class='language-javascript'>[object Object]</code>.</p>
<div class="table-wrapper-paragraph">
<table>
<thead>
<tr>
<th><code class='language-javascript'>x</code></th>
<th><code class='language-javascript'>y</code></th>
<th><code class='language-javascript'>x === y</code></th>
</tr>
</thead>
<tbody>
<tr>
<td><code class='language-javascript'>5</code></td>
<td><code class='language-javascript'>5</code></td>
<td><code class='language-javascript'>true</code></td>
</tr>
<tr>
<td><code class='language-javascript'>1</code></td>
<td><code class='language-javascript'>'1'</code></td>
<td><code class='language-javascript'>false</code></td>
</tr>
<tr>
<td><code class='language-javascript'>null</code></td>
<td><code class='language-javascript'>undefined</code></td>
<td><code class='language-javascript'>false</code></td>
</tr>
<tr>
<td><code class='language-javascript'>0</code></td>
<td><code class='language-javascript'>false</code></td>
<td><code class='language-javascript'>false</code></td>
</tr>
<tr>
<td><code class='language-javascript'>'1,2'</code></td>
<td><code class='language-javascript'>[1,2]</code></td>
<td><code class='language-javascript'>false</code></td>
</tr>
<tr>
<td><code class='language-javascript'>'[object Object]'</code></td>
<td><code class='language-javascript'>{}</code></td>
<td><code class='language-javascript'>false</code></td>
</tr>
</tbody>
</table>
</div>
<p>If we use the&nbsp;<code class='language-javascript'>===</code>&nbsp;operator all the comparisons except for the first example will return&nbsp;<code class='language-javascript'>false</code>&nbsp;because they don't have the same type while the first example will return&nbsp;<code class='language-javascript'>true</code>&nbsp;because the two have the same type and value.</p>`,categories:[{name:"Code",id:2}],id:14},{question:"Why does it return false when comparing two similar objects in JavaScript?",answer:`<p>Suppose we have an example below.</p>
<div class="highlight">
<pre class="highlight javascript"><code class='language-javascript'>let a = { a: 1 };
let b = { a: 1 };
let c = a;

console.log(a === b); // logs false even though they have the same property
console.log(a === c); // logs true hmm
</code></pre>
</div>
<p><strong>JavaScript</strong>&nbsp;compares&nbsp;<em>objects</em>&nbsp;and&nbsp;<em>primitives</em>&nbsp;differently. In&nbsp;<em>primitives</em>&nbsp;it compares them by&nbsp;<strong>value</strong>&nbsp;while in&nbsp;<em>objects</em>&nbsp;it compares them by&nbsp;<strong>reference</strong>&nbsp;or the&nbsp;<strong>address in memory where the variable is stored</strong>. That's why the first&nbsp;<code class='language-javascript'>console.log</code>&nbsp;statement returns&nbsp;<code class='language-javascript'>false</code>&nbsp;and the second&nbsp;<code class='language-javascript'>console.log</code>&nbsp;statement returns&nbsp;<code class='language-javascript'>true</code>.&nbsp;<code class='language-javascript'>a</code>&nbsp;and&nbsp;<code class='language-javascript'>c</code>&nbsp;have the same reference and&nbsp;<code class='language-javascript'>a</code>&nbsp;and&nbsp;<code class='language-javascript'>b</code>&nbsp;are not.</p>`,categories:[{name:"Code",id:2}],id:15},{question:"What does the !! operator do?",answer:`<p>The&nbsp;<strong>Double NOT</strong>&nbsp;operator or&nbsp;<strong>!!</strong>&nbsp;coerces the value on the right side into a boolean. basically it's a fancy way of converting a value into a boolean.</p>
<div class="highlight">
<pre class="highlight javascript"><code class='language-javascript'>console.log(!!null); //logs false
console.log(!!undefined); //logs false
console.log(!!''); //logs false
console.log(!!0); //logs false
console.log(!!NaN); //logs false
console.log(!!' '); //logs true
console.log(!!{}); //logs true
console.log(!![]); //logs true
console.log(!!1); //logs true
console.log(!![].length); //logs false</code></pre>
</div>`,categories:[{name:"Code",id:2}],id:16},{question:"How to evaluate multiple expressions in one line?",answer:`<p>We can use the&nbsp;<code class='language-javascript'>,</code>&nbsp;or comma operator to evaluate multiple expressions in one line. It evaluates from left-to-right and returns the value of the last item on the right or the last operand.</p>
<div class="highlight">
<pre class="highlight javascript"><code class='language-javascript'>let x = 5;

x = (x++ , x = addFive(x), x *= 2, x -= 5, x += 10);

function addFive(num) {
  return num + 5;
}
</code></pre>
</div>
<p>If you log the value of&nbsp;<code class='language-javascript'>x</code>&nbsp;it would be&nbsp;<strong>27</strong>. First, we&nbsp;<strong>increment</strong>&nbsp;the value of x it would be&nbsp;<strong>6</strong>, then we invoke the function&nbsp;<code class='language-javascript'>addFive(6)</code>&nbsp;and pass the 6 as a parameter and assign the result to&nbsp;<code class='language-javascript'>x</code>&nbsp;the new value of&nbsp;<code class='language-javascript'>x</code>&nbsp;would be&nbsp;<strong>11</strong>. After that, we multiply the current value of&nbsp;<code class='language-javascript'>x</code>&nbsp;to&nbsp;<strong>2</strong>&nbsp;and assign it to&nbsp;<code class='language-javascript'>x</code>&nbsp;the updated value of&nbsp;<code class='language-javascript'>x</code>&nbsp;would be&nbsp;<strong>22</strong>. Then, we subtract the current value of&nbsp;<code class='language-javascript'>x</code>&nbsp;to 5 and assign the result to&nbsp;<code class='language-javascript'>x</code>&nbsp;the updated value would be&nbsp;<strong>17</strong>. And lastly, we increment the value of&nbsp;<code class='language-javascript'>x</code>&nbsp;by 10 and assign the updated value to&nbsp;<code class='language-javascript'>x</code>&nbsp;now the value of&nbsp;<code class='language-javascript'>x</code>&nbsp;would be&nbsp;<strong>27</strong>.</p>`,categories:[{name:"Code",id:2}],id:17},{question:"What is Hoisting?",answer:`<p><strong>Hoisting</strong>&nbsp;is the term used to describe the moving of&nbsp;<em>variables</em>&nbsp;and&nbsp;<em>functions</em>&nbsp;to the top of their&nbsp;<em>(global or function)</em>&nbsp;scope on where we define that variable or function.</p>
<p>Ok to understand&nbsp;<strong>Hoisting</strong>, I have to explain the&nbsp;<em>execution context</em>.<br />The&nbsp;<strong>Execution Context</strong>&nbsp;is the "environment of code" that is currently executing. The&nbsp;<strong>Execution Context</strong>&nbsp;has two phases&nbsp;<em>compilation</em>&nbsp;and&nbsp;<em>execution</em>.</p>
<p><strong>Compilation</strong>&nbsp;- in this phase it gets all the&nbsp;<em>function declarations</em>&nbsp;and&nbsp;<em>hoists</em>&nbsp;them up to the top of their scope so we can reference them later and gets all&nbsp;<em>variables declaration</em>&nbsp;<strong>(declare with the var keyword)</strong>&nbsp;and also&nbsp;<em>hoists</em>&nbsp;them up and give them a default value of&nbsp;<em>undefined</em>.</p>
<p><strong>Execution</strong>&nbsp;- in this phase it assigns values to the variables&nbsp;<em>hoisted</em>&nbsp;earlier and it&nbsp;<em>executes</em>&nbsp;or&nbsp;<em>invokes</em>&nbsp;functions&nbsp;<strong>(methods in objects)</strong>.</p>
<p><strong>Note:</strong>&nbsp;only&nbsp;<strong>function declarations</strong>&nbsp;and variables declared with the&nbsp;<em>var</em>&nbsp;keyword are&nbsp;<em>hoisted</em>&nbsp;not&nbsp;<strong>function expressions</strong>&nbsp;or&nbsp;<strong>arrow functions</strong>,&nbsp;<code class='language-javascript'>let</code>&nbsp;and&nbsp;<code class='language-javascript'>const</code>&nbsp;keywords.</p>
<p>Ok, suppose we have an example code in the&nbsp;<em>global scope</em>&nbsp;below.</p>
<div class="highlight">
<pre class="highlight javascript"><code class='language-javascript'>console.log(y);
y = 1;
console.log(y);
console.log(greet("Mark"));

function greet(name){
  return 'Hello ' + name + '!';
}

var y;
</code></pre>
</div>
<p>This code logs&nbsp;<code class='language-javascript'>undefined</code>,<code class='language-javascript'>1</code>,&nbsp;<code class='language-javascript'>Hello Mark!</code>&nbsp;respectively.</p>
<p>So the&nbsp;<em>compilation</em>&nbsp;phase would look like this.</p>
<div class="highlight">
<pre class="highlight javascript"><code class='language-javascript'>function greet(name) {
  return 'Hello ' + name + '!';
}

var y; //implicit "undefined" assignment

//waiting for "compilation" phase to finish

//then start "execution" phase
/*
console.log(y);
y = 1;
console.log(y);
console.log(greet("Mark"));
*/

</code></pre>
</div>
<p>for example purposes, I commented on the&nbsp;<em>assignment</em>&nbsp;of variable and&nbsp;<em>function call</em>.</p>
<p>After the&nbsp;<em>compilation</em>&nbsp;phase finishes it starts the&nbsp;<em>execution</em>&nbsp;phase invoking methods and assigns values to variables.</p>
<div class="highlight">
<pre class="highlight javascript"><code class='language-javascript'>function greet(name) {
  return 'Hello ' + name + '!';
}

var y;

//start "execution" phase

console.log(y);
y = 1;
console.log(y);
console.log(greet("Mark"));</code></pre>
</div>`,categories:[{name:"Code",id:2}],id:18},{question:"What is Scope?",answer:`<p><strong>Scope</strong>&nbsp;in JavaScript is the&nbsp;<strong>area</strong>&nbsp;where we have valid access to variables or functions. JavaScript has three types of Scopes.&nbsp;<strong>Global Scope</strong>,&nbsp;<strong>Function Scope</strong>, and&nbsp;<strong>Block Scope(ES6)</strong>.</p>
<ul>
<li><strong>Global Scope</strong>&nbsp;- variables or functions declared in the global namespace are in the global scope and therefore is accessible everywhere in our code.</li>
</ul>
<div class="highlight">
<pre class="highlight javascript"><code class='language-javascript'>   //global namespace
   var g = "global";

   function globalFunc(){
     function innerFunc(){
          console.log(g); // can access "g" because "g" is a global variable
     }
     innerFunc();
   }  
</code></pre>
</div>
<ul>
<li><strong>Function Scope</strong>&nbsp;- variables,functions and parameters declared within a function are accessible inside that function but not outside of it.</li>
</ul>
<div class="highlight">
<pre class="highlight javascript"><code class='language-javascript'>    function myFavoriteFunc(a) {
       if (true) {
          var b = "Hello " + a;
       }
       return b;
   }
   myFavoriteFunc("World");

   console.log(a); // Throws a ReferenceError "a" is not defined
   console.log(b); // does not continue here 
</code></pre>
</div>
<ul>
<li><strong>Block Scope</strong>&nbsp;- variables&nbsp;<strong>(<code class='language-javascript'>let</code>,<code class='language-javascript'>const</code>)</strong>&nbsp;declared within a block&nbsp;<code class='language-javascript'>{}</code>&nbsp;can only be access within it.</li>
</ul>
<div class="highlight">
<pre class="highlight javascript"><code class='language-javascript'> function testBlock(){
   if(true){
     let z = 5;
   }
   return z; 
 }

 testBlock(); // Throws a ReferenceError "z" is not defined
</code></pre>
</div>
<p><strong>Scope</strong>&nbsp;is also a set of rules for finding variables. If a variable does not exist in the&nbsp;<strong>current scope</strong>&nbsp;it&nbsp;<strong>look ups</strong>&nbsp;and searches for a variable in the&nbsp;<strong>outer scope</strong>&nbsp;and if does not exist again it&nbsp;<strong>looks up</strong>&nbsp;again until it reaches the&nbsp;<strong>global scope</strong>&nbsp;if the variable exists then we can use it if not it throws an error. It searches for the&nbsp;<strong>nearest</strong>&nbsp;variable and it stops&nbsp;<strong>searching</strong>&nbsp;or&nbsp;<strong>looking up</strong>&nbsp;once it finds it. This is called&nbsp;<strong>Scope Chain</strong>.</p>
<div class="highlight">
<pre class="highlight javascript"><code class='language-javascript'>   /* Scope Chain
   Inside inner function perspective

   inner's scope -&gt; outer's scope -&gt; global's scope
  */


  //Global Scope
  var variable1 = "Comrades";   
  var variable2 = "Sayonara";

  function outer(){
  //outer's scope
    var variable1 = "World";
    function inner(){
    //inner's scope
      var variable2 = "Hello";
      console.log(variable2 + " " + variable1);
    }
    inner();
  }  
  outer(); 
// logs Hello World 
// because (variable2 = "Hello") and (variable1 = "World") are the nearest 
// variables inside inner's scope.
</code></pre>
</div>
<p><a class="article-body-image-wrapper" href="https://res.cloudinary.com/practicaldev/image/fetch/s--dJFL2g1k--/c_limit%2Cf_auto%2Cfl_progressive%2Cq_auto%2Cw_880/https://thepracticaldev.s3.amazonaws.com/i/l81b3nmdonimex0qsgyr.png"><img src="https://res.cloudinary.com/practicaldev/image/fetch/s--dJFL2g1k--/c_limit%2Cf_auto%2Cfl_progressive%2Cq_auto%2Cw_880/https://thepracticaldev.s3.amazonaws.com/i/l81b3nmdonimex0qsgyr.png" alt="Scope" loading="lazy" /></a></p>`,categories:[{name:"Code",id:2}],id:19},{question:"What are Closures?",answer:`<p>This is probably the hardest question of all these questions because&nbsp;<strong>Closures</strong>&nbsp;is a controversial topic. So I'm gonna explain it from what I understand.</p>
<p><strong>Closures</strong>&nbsp;is simply the ability of a function at the time of declaration to remember the references of variables and parameters on its current scope, on its parent function scope, on its parent's parent function scope until it reaches the global scope with the help of&nbsp;<strong>Scope Chain</strong>. Basically it is the&nbsp;<strong>Scope</strong>&nbsp;created when the function was declared.</p>
<p>Examples are a great way to explain closures.</p>
<div class="highlight">
<pre class="highlight javascript"><code class='language-javascript'>   //Global's Scope
   var globalVar = "abc";

   function a(){
   //testClosures's Scope
     console.log(globalVar);
   }

   a(); //logs "abc" 
   /* Scope Chain
      Inside a function perspective

      a's scope -&gt; global's scope  
   */ 
</code></pre>
</div>
<p>In this example, when we declare the&nbsp;<code class='language-javascript'>a</code>&nbsp;function the&nbsp;<strong>Global Scope</strong>&nbsp;is part of&nbsp;<code class='language-javascript'>a's</code>&nbsp;<em>closure</em>.</p>
<p><a class="article-body-image-wrapper" href="https://res.cloudinary.com/practicaldev/image/fetch/s--gbH9Uqec--/c_limit%2Cf_auto%2Cfl_progressive%2Cq_auto%2Cw_880/https://thepracticaldev.s3.amazonaws.com/i/teatokuw4xvgtlzbzhn8.png"><img src="https://res.cloudinary.com/practicaldev/image/fetch/s--gbH9Uqec--/c_limit%2Cf_auto%2Cfl_progressive%2Cq_auto%2Cw_880/https://thepracticaldev.s3.amazonaws.com/i/teatokuw4xvgtlzbzhn8.png" alt="a's closure" loading="lazy" /></a></p>
<p>The reason for the variable&nbsp;<code class='language-javascript'>globalVar</code>&nbsp;which does not have a value in the image because of the reason that the value of that variable can change based on&nbsp;<strong>where</strong>&nbsp;and&nbsp;<strong>when</strong>&nbsp;we invoke the&nbsp;<code class='language-javascript'>a</code>&nbsp;function.<br />But in our example above the&nbsp;<code class='language-javascript'>globalVar</code>&nbsp;variable will have the value of&nbsp;<strong>abc</strong>.</p>
<p>Ok, let's have a complex example.</p>
<div class="highlight">
<pre class="highlight javascript"><code class='language-javascript'>var globalVar = "global";
var outerVar = "outer"

function outerFunc(outerParam) {
  function innerFunc(innerParam) {
    console.log(globalVar, outerParam, innerParam);
  }
  return innerFunc;
}

const x = outerFunc(outerVar);
outerVar = "outer-2";
globalVar = "guess"
x("inner");
</code></pre>
</div>
<p><a class="article-body-image-wrapper" href="https://res.cloudinary.com/practicaldev/image/fetch/s--inSFoNQU--/c_limit%2Cf_auto%2Cfl_progressive%2Cq_auto%2Cw_880/https://thepracticaldev.s3.amazonaws.com/i/e4hxm7zvz8eun2ppenwp.png"><img src="https://res.cloudinary.com/practicaldev/image/fetch/s--inSFoNQU--/c_limit%2Cf_auto%2Cfl_progressive%2Cq_auto%2Cw_880/https://thepracticaldev.s3.amazonaws.com/i/e4hxm7zvz8eun2ppenwp.png" alt="Complex" loading="lazy" /></a><br />This will print "guess outer inner". The explanation for this is that when we invoke the&nbsp;<code class='language-javascript'>outerFunc</code>&nbsp;function and assigned the returned value the&nbsp;<code class='language-javascript'>innerFunc</code>&nbsp;function to the variable&nbsp;<code class='language-javascript'>x</code>, the&nbsp;<code class='language-javascript'>outerParam</code>&nbsp;will have a value of&nbsp;<strong>outer</strong>&nbsp;even though we assign a new value&nbsp;<strong>outer-2</strong>&nbsp;to the&nbsp;<code class='language-javascript'>outerVar</code>&nbsp;variable because<br />the reassignment happened after the invocation of the&nbsp;<code class='language-javascript'>outer</code>&nbsp;function and in that time when we invoke the&nbsp;<code class='language-javascript'>outerFunc</code>&nbsp;function it's look up the value of&nbsp;<code class='language-javascript'>outerVar</code>&nbsp;in the&nbsp;<strong>Scope Chain</strong>, the&nbsp;<code class='language-javascript'>outerVar</code>&nbsp;will have a value of&nbsp;<strong>"outer"</strong>. Now, when we invoke the&nbsp;<code class='language-javascript'>x</code>&nbsp;variable which have a reference to the&nbsp;<code class='language-javascript'>innerFunc</code>, the<br /><code class='language-javascript'>innerParam</code>&nbsp;will have a value of&nbsp;<strong>inner</strong>&nbsp;because thats the value we pass in the invocation and the&nbsp;<code class='language-javascript'>globalVar</code>&nbsp;variable will have a value of&nbsp;<strong>guess</strong>&nbsp;because before the invocation of the&nbsp;<code class='language-javascript'>x</code>&nbsp;variable we assign a new value to the&nbsp;<code class='language-javascript'>globalVar</code>&nbsp;and at the time of invocation&nbsp;<code class='language-javascript'>x</code>&nbsp;the value of&nbsp;<code class='language-javascript'>globalVar</code>&nbsp;in the_<em>Scope Chain</em>_ is<br /><strong>guess</strong>.</p>
<p>We have an example that demonstrates a problem of not understanding closure correctly.</p>
<div class="highlight">
<pre class="highlight javascript"><code class='language-javascript'>const arrFuncs = [];
for(var i = 0; i &lt; 5; i++){
  arrFuncs.push(function (){
    return i;
  });
}
console.log(i); // i is 5

for (let i = 0; i &lt; arrFuncs.length; i++) {
  console.log(arrFuncs[i]()); // all logs "5"
}
</code></pre>
</div>
<p>This code is not working as we expected because of&nbsp;<strong>Closures</strong>.<br />The&nbsp;<code class='language-javascript'>var</code>&nbsp;keyword makes a global variable and when we push a function<br />we return the global variable&nbsp;<code class='language-javascript'>i</code>. So when we call one of those functions in that array after the loop it logs&nbsp;<code class='language-javascript'>5</code>&nbsp;because we get<br />the current value of&nbsp;<code class='language-javascript'>i</code>&nbsp;which is&nbsp;<code class='language-javascript'>5</code>&nbsp;and we can access it because it's a global variable. Because&nbsp;<strong>Closures</strong>&nbsp;keeps the&nbsp;<strong>references</strong>&nbsp;of that variable not its&nbsp;<strong>values</strong>&nbsp;at the time of it's creation. We can solve this using&nbsp;<strong>IIFES</strong>&nbsp;or changing the&nbsp;<code class='language-javascript'>var</code>&nbsp;keyword to&nbsp;<code class='language-javascript'>let</code>&nbsp;for block-scoping.</p>`,categories:[{name:"Code",id:2}],id:20},{question:"What are the falsy values in JavaScript?",answer:`<div class="highlight">
<pre class="highlight javascript"><code class='language-javascript'> const falsyValues = ['', 0, null, undefined, NaN, false];
</code></pre>
</div>
<p><strong>falsy</strong>&nbsp;values are values that when converted to boolean becomes&nbsp;<strong>false</strong>.</p>`,categories:[{name:"Code",id:2}],id:21},{question:"How to check if a value is falsy?",answer:"<p>Use the&nbsp;<strong>Boolean</strong> function or the Double NOT operator !!</p>",categories:[{name:"Code",id:2}],id:22},{question:'What does "use strict" do?',answer:`<p><code class='language-javascript'>"use strict"</code>&nbsp;is a ES5 feature in&nbsp;<strong>JavaScript</strong>&nbsp;that makes our code in&nbsp;<strong>Strict Mode</strong>&nbsp;in&nbsp;<em>functions</em>&nbsp;or&nbsp;<em>entire scripts</em>.&nbsp;<strong>Strict Mode</strong>&nbsp;helps us avoid&nbsp;<strong>bugs</strong>&nbsp;early on in our code and adds restrictions to it.</p>
<p>Restrictions that&nbsp;<strong>Strict Mode</strong>&nbsp;gives us.</p>
<ul>
<li>Assigning or Accessing a variable that is not declared.</li>
</ul>
<div class="highlight">
<pre class="highlight javascript"><code class='language-javascript'> function returnY(){
    "use strict";
    y = 123;
    return y;
 }
</code></pre>
</div>
<ul>
<li>Assigning a value to a read-only or non-writable global variable;</li>
</ul>
<div class="highlight">
<pre class="highlight javascript"><code class='language-javascript'>   "use strict";
   var NaN = NaN;
   var undefined = undefined;
   var Infinity = "and beyond";
</code></pre>
</div>
<ul>
<li>Deleting an undeletable property.</li>
</ul>
<div class="highlight">
<pre class="highlight javascript"><code class='language-javascript'>   "use strict";
   const obj = {};

   Object.defineProperty(obj, 'x', {
      value : '1'
   });  

   delete obj.x;
</code></pre>
</div>
<ul>
<li>Duplicate parameter names.</li>
</ul>
<div class="highlight">
<pre class="highlight javascript"><code class='language-javascript'>   "use strict";

   function someFunc(a, b, b, c){

   }
</code></pre>
</div>
<ul>
<li>Creating variables with the use of the&nbsp;<strong>eval</strong>&nbsp;function.</li>
</ul>
<div class="highlight">
<pre class="highlight javascript"><code class='language-javascript'> "use strict";

 eval("var x = 1;");

 console.log(x); //Throws a Reference Error x is not defined

</code></pre>
</div>
<ul>
<li>The default value of&nbsp;<strong>this</strong>&nbsp;will be&nbsp;<code class='language-javascript'>undefined</code>.</li>
</ul>
<div class="highlight">
<pre class="highlight javascript"><code class='language-javascript'>  "use strict";

  function showMeThis(){
    return this;
  }

  showMeThis(); //returns undefined
</code></pre>
</div>
<p>There are many more restrictions in&nbsp;<strong>Strict Mode</strong>&nbsp;than these.</p>`,categories:[{name:"Code",id:2}],id:23},{question:"What's the value of this in JavaScript?",answer:`<p>Basically,&nbsp;<code class='language-javascript'>this</code>&nbsp;refers to the value of the object that is currently executing or invoking the function. I say&nbsp;<strong>currently</strong>&nbsp;due to the reason that the value of&nbsp;<strong>this</strong>&nbsp;changes depending on the context on which we use it and where we use it.</p>
<div class="highlight">
<pre class="highlight javascript"><code class='language-javascript'>   const carDetails = {
     name: "Ford Mustang",
     yearBought: 2005,
     getName(){
        return this.name;
     },
     isRegistered: true
   };

   console.log(carDetails.getName()); // logs Ford Mustang
</code></pre>
</div>
<p>This is what we would normally expect because in the&nbsp;<strong>getName</strong>&nbsp;method we return&nbsp;<code class='language-javascript'>this.name</code>,&nbsp;<code class='language-javascript'>this</code>&nbsp;in this context refers to the object which is the&nbsp;<code class='language-javascript'>carDetails</code>&nbsp;object that is currently the "owner" object of the function executing.</p>
<p>Ok, Let's some add some code to make it weird. Below the&nbsp;<code class='language-javascript'>console.log</code>&nbsp;statement add this three lines of code</p>
<div class="highlight">
<pre class="highlight javascript"><code class='language-javascript'>   var name = "Ford Ranger";
   var getCarName = carDetails.getName;

   console.log(getCarName()); // logs Ford Ranger
</code></pre>
</div>
<p>The second&nbsp;<code class='language-javascript'>console.log</code>&nbsp;statement prints the word&nbsp;<strong>Ford Ranger</strong>&nbsp;which is weird because in our first&nbsp;<code class='language-javascript'>console.log</code>&nbsp;statement it printed&nbsp;<strong>Ford Mustang</strong>. The reason to this is that the&nbsp;<code class='language-javascript'>getCarName</code>&nbsp;method has a different "owner" object that is the&nbsp;<code class='language-javascript'>window</code>&nbsp;object. Declaring variables with the&nbsp;<code class='language-javascript'>var</code>&nbsp;keyword in the global scope attaches properties in the&nbsp;<code class='language-javascript'>window</code>&nbsp;object with the same name as the variables. Remember&nbsp;<code class='language-javascript'>this</code>&nbsp;in the global scope refers to the&nbsp;<code class='language-javascript'>window</code>&nbsp;object when&nbsp;<code class='language-javascript'>"use strict"</code>&nbsp;is not used.</p>
<div class="highlight">
<pre class="highlight javascript"><code class='language-javascript'>  console.log(getCarName === window.getCarName); //logs true
  console.log(getCarName === this.getCarName); // logs true
</code></pre>
</div>
<p><code class='language-javascript'>this</code>&nbsp;and&nbsp;<code class='language-javascript'>window</code>&nbsp;in this example refer to the same object.</p>
<p>One way of solving this problem is by using the&nbsp;<code class='language-javascript'>apply</code>&nbsp;and&nbsp;<code class='language-javascript'>call</code>&nbsp;methods in functions.</p>
<div class="highlight">
<pre class="highlight javascript"><code class='language-javascript'>   console.log(getCarName.apply(carDetails)); //logs Ford Mustang
   console.log(getCarName.call(carDetails));  //logs Ford Mustang
</code></pre>
</div>
<p>The&nbsp;<code class='language-javascript'>apply</code>&nbsp;and&nbsp;<code class='language-javascript'>call</code>&nbsp;methods expects the first parameter to be an object which would be value of&nbsp;<code class='language-javascript'>this</code>&nbsp;inside that function.</p>
<p><strong>IIFE</strong>&nbsp;or&nbsp;<strong>Immediately Invoked Function Expression</strong>, Functions that are declared in the global scope,&nbsp;<strong>Anonymous Functions</strong>&nbsp;and Inner functions in methods inside an object has a default of&nbsp;<strong>this</strong>&nbsp;which points to the&nbsp;<strong>window</strong>&nbsp;object.</p>
<div class="highlight">
<pre class="highlight javascript"><code class='language-javascript'>   (function (){
     console.log(this);
   })(); //logs the "window" object

   function iHateThis(){
      console.log(this);
   }

   iHateThis(); //logs the "window" object  

   const myFavoriteObj = {
     guessThis(){
        function getThis(){
          console.log(this);
        }
        getThis();
     },
     name: 'Marko Polo',
     thisIsAnnoying(callback){
       callback();
     }
   };


   myFavoriteObj.guessThis(); //logs the "window" object
   myFavoriteObj.thisIsAnnoying(function (){
     console.log(this); //logs the "window" object
   });
</code></pre>
</div>
<p>If we want to get the value of the&nbsp;<code class='language-javascript'>name</code>&nbsp;property which is&nbsp;<strong>Marko Polo</strong>&nbsp;in the&nbsp;<code class='language-javascript'>myFavoriteObj</code>&nbsp;object there are two ways to solve this.</p>
<p>First, we save the value of&nbsp;<code class='language-javascript'>this</code>&nbsp;in a variable.</p>
<div class="highlight">
<pre class="highlight javascript"><code class='language-javascript'>   const myFavoriteObj = {
     guessThis(){
         const self = this; //saves the this value to the "self" variable
         function getName(){
           console.log(self.name);
         }
         getName();
     },
     name: 'Marko Polo',
     thisIsAnnoying(callback){
       callback();
     }
   };
</code></pre>
</div>
<p>In this image we save the value of&nbsp;<code class='language-javascript'>this</code>&nbsp;which would be the&nbsp;<code class='language-javascript'>myFavoriteObj</code>&nbsp;object. So we can access it inside the&nbsp;<code class='language-javascript'>getName</code>&nbsp;inner function.</p>
<p>Second, we use&nbsp;<strong>ES6 Arrow Functions</strong>.</p>
<div class="highlight">
<pre class="highlight javascript"><code class='language-javascript'>   const myFavoriteObj = {
     guessThis(){
         const getName = () =&gt; { 
           //copies the value of "this" outside of this arrow function
           console.log(this.name);
         }
         getName();
     },
     name: 'Marko Polo',
     thisIsAnnoying(callback){
       callback();
     }
   };
</code></pre>
</div>
<p>Arrow Functions does not have its own <code class='language-javascript'>this</code>. It copies the value of&nbsp;<code class='language-javascript'>this</code>&nbsp;of the enclosing lexical scope or in this example the value of&nbsp;<code class='language-javascript'>this</code>&nbsp;outside the&nbsp;<code class='language-javascript'>getName</code>&nbsp;inner function which would be the&nbsp;<code class='language-javascript'>myFavoriteObj</code>&nbsp;object. We can also determine the value of&nbsp;<code class='language-javascript'>this</code> on how the function is invoked.</p>`,categories:[{name:"Code",id:2}],id:24},{question:"What is the prototype of an object?",answer:`<p>A&nbsp;<code class='language-javascript'>prototype</code>&nbsp;in simplest terms is a&nbsp;<em>blueprint</em>&nbsp;of an object. It is used as a fallback for&nbsp;<strong>properties</strong>&nbsp;and&nbsp;<strong>methods</strong>&nbsp;if it does exist in the current object. It's the way to share properties and functionality between objects. It's the core concept around JavaScript's&nbsp;<strong>Prototypal Inheritance</strong>.</p>
<div class="highlight">
<pre class="highlight javascript"><code class='language-javascript'>  const o = {};
  console.log(o.toString()); // logs [object Object] 
</code></pre>
</div>
<p>Even though the&nbsp;<code class='language-javascript'>o.toString</code>&nbsp;method does not exist in the&nbsp;<code class='language-javascript'>o</code>&nbsp;object it does not throw an error instead returns a string&nbsp;<code class='language-javascript'>[object Object]</code>. When a property does not exist in the object it looks into its&nbsp;<strong>prototype</strong>&nbsp;and if it still does not exist it looks into the&nbsp;<strong>prototype's prototype</strong>&nbsp;and so on until it finds a property with the same in the&nbsp;<strong>Prototype Chain</strong>. The end of the&nbsp;<strong>Prototype Chain</strong>&nbsp;is the&nbsp;<strong>Object.prototype</strong>.</p>
<div class="highlight">
<pre class="highlight javascript"><code class='language-javascript'>   console.log(o.toString === Object.prototype.toString); // logs true
   // which means we we're looking up the Prototype Chain and it reached 
   // the Object.prototype and used the "toString" method.</code></pre>
</div>`,categories:[{name:"Code",id:2}],id:25},{question:"What is an IIFE, what is the use of it?",answer:`<p>An&nbsp;<strong>IIFE</strong>&nbsp;or&nbsp;<strong>Immediately Invoked Function Expression</strong>&nbsp;is a function that is gonna get invoked or executed after its creation or declaration. The syntax for creating&nbsp;<strong>IIFE</strong>&nbsp;is that we wrap the&nbsp;<code class='language-javascript'>function (){}</code>&nbsp;inside a parentheses&nbsp;<code class='language-javascript'>()</code>&nbsp;or the&nbsp;<strong>Grouping Operator</strong>&nbsp;to treat the function as an expression and after that we invoke it with another parentheses&nbsp;<code class='language-javascript'>()</code>. So an&nbsp;<strong>IIFE</strong>&nbsp;looks like this&nbsp;<code class='language-javascript'>(function(){})()</code>.</p>
<div class="highlight">
<pre class="highlight javascript"><code class='language-javascript'>(function () {

}());

(function () {

})();

(function named(params) {

})();

(() =&gt; {

})();

(function (global) {

})(window);

const utility = (function () {
   return {
      //utilities
   };
})();
</code></pre>
</div>
<p>These examples are all valid&nbsp;<strong>IIFE</strong>. The second to the last example shows we can pass arguments to an&nbsp;<strong>IIFE</strong>&nbsp;function. The last example shows that we can save the result of the&nbsp;<strong>IIFE</strong>&nbsp;to a variable so we can reference it later.</p>
<p>The best use of&nbsp;<strong>IIFE</strong>&nbsp;is making initialization setup functionalities and to avoid&nbsp;<strong>naming collisions</strong>&nbsp;with other variables in the global scope or polluting the global namespace. Let's have an example.</p>
<div class="highlight">
<pre class="highlight html"><code class='language-javascript'>&lt;script src="https://cdnurl.com/somelibrary.js"&gt;&lt;/script&gt;
</code></pre>
</div>
<p>Suppose we have a link to a library&nbsp;<code class='language-javascript'>somelibrary.js</code>&nbsp;that exposes some global functions that we use can in our code but this library has two methods that we don't use&nbsp;<code class='language-javascript'>createGraph</code>&nbsp;and&nbsp;<code class='language-javascript'>drawGraph</code>&nbsp;because these methods have bugs in them. And we want to implement our own&nbsp;<code class='language-javascript'>createGraph</code>&nbsp;and&nbsp;<code class='language-javascript'>drawGraph</code>&nbsp;methods.</p>
<ul>
<li>One way of solving this is by changing the structure of our scripts.</li>
</ul>
<div class="highlight">
<pre class="highlight html"><code class='language-javascript'>&lt;script src="https://cdnurl.com/somelibrary.js"&gt;&lt;/script&gt;
&lt;script&gt;
   function createGraph() {
      // createGraph logic here
   }
   function drawGraph() {
      // drawGraph logic here
   }
&lt;/script&gt;
</code></pre>
</div>
<p>When we use this solution we are overriding those two methods that the library gives us.</p>
<ul>
<li>Another way of solving this is by changing the name of our own helper functions.</li>
</ul>
<div class="highlight">
<pre class="highlight html"><code class='language-javascript'>&lt;script src="https://cdnurl.com/somelibrary.js"&gt;&lt;/script&gt;
&lt;script&gt;
   function myCreateGraph() {
      // createGraph logic here
   }
   function myDrawGraph() {
      // drawGraph logic here
   }
&lt;/script&gt;
</code></pre>
</div>
<p>When we use this solution we will also change those function calls to the new function names.</p>
<ul>
<li>Another way is using an&nbsp;<strong>IIFE</strong>.</li>
</ul>
<div class="highlight">
<pre class="highlight html"><code class='language-javascript'>&lt;script src="https://cdnurl.com/somelibrary.js"&gt;&lt;/script&gt;
&lt;script&gt;
   const graphUtility = (function () {
      function createGraph() {
         // createGraph logic here
      }
      function drawGraph() {
         // drawGraph logic here
      }
      return {
         createGraph,
         drawGraph
      }
   })();
&lt;/script&gt;
</code></pre>
</div>
<p>In this solution, we are making a utility variable that is the result of&nbsp;<strong>IIFE</strong>&nbsp;which returns an object that contains two methods&nbsp;<code class='language-javascript'>createGraph</code>&nbsp;and&nbsp;<code class='language-javascript'>drawGraph</code>.</p>
<p>Another problem that&nbsp;<strong>IIFE</strong>&nbsp;solves is in this example.</p>
<div class="highlight">
<pre class="highlight javascript"><code class='language-javascript'>var li = document.querySelectorAll('.list-group &gt; li');
for (var i = 0, len = li.length; i &lt; len; i++) {
   li[i].addEventListener('click', function (e) {
      console.log(i);
   })
}
</code></pre>
</div>
<p>Suppose we have a&nbsp;<code class='language-javascript'>ul</code>&nbsp;element with a class of&nbsp;<strong>list-group</strong>&nbsp;and it has 5&nbsp;<code class='language-javascript'>li</code>&nbsp;child elements. And we want to&nbsp;<code class='language-javascript'>console.log</code>&nbsp;the value of&nbsp;<code class='language-javascript'>i</code>&nbsp;when we&nbsp;<strong>click</strong>&nbsp;an individual&nbsp;<code class='language-javascript'>li</code>&nbsp;element.<br />But the behavior we want in this code does not work. Instead, it logs&nbsp;<code class='language-javascript'>5</code>&nbsp;in any&nbsp;<strong>click</strong>&nbsp;on an&nbsp;<code class='language-javascript'>li</code>&nbsp;element. The problem we're having is due to how&nbsp;<strong>Closures</strong>&nbsp;work.&nbsp;<strong>Closures</strong>&nbsp;are simply the ability of functions to remember the references of variables on its current scope, on its parent function scope and in the global scope. When we declare variables using the&nbsp;<code class='language-javascript'>var</code>&nbsp;keyword in the global scope, obviously we are making a global variable&nbsp;<code class='language-javascript'>i</code>. So when we click an&nbsp;<code class='language-javascript'>li</code>&nbsp;element it logs&nbsp;<strong>5</strong>&nbsp;because that is the value of&nbsp;<code class='language-javascript'>i</code>&nbsp;when we reference it later in the callback function.</p>
<ul>
<li>One solution to this is an&nbsp;<strong>IIFE</strong>.</li>
</ul>
<div class="highlight">
<pre class="highlight javascript"><code class='language-javascript'>var li = document.querySelectorAll('.list-group &gt; li');
for (var i = 0, len = li.length; i &lt; len; i++) {
   (function (currentIndex) {
      li[currentIndex].addEventListener('click', function (e) {
         console.log(currentIndex);
      })
   })(i);
}
</code></pre>
</div>
<p>This solution works because of the reason that the&nbsp;<strong>IIFE</strong>&nbsp;creates a new scope for every iteration and we capture the value of&nbsp;<code class='language-javascript'>i</code>&nbsp;and pass it into the&nbsp;<code class='language-javascript'>currentIndex</code>&nbsp;parameter so the value of&nbsp;<code class='language-javascript'>currentIndex</code>&nbsp;is different for every iteration when we invoke the&nbsp;<strong>IIFE</strong>.</p>`,categories:[{name:"Code",id:2}],id:26},{question:"What is the use Function.prototype.apply method?",answer:`<p>The&nbsp;<code class='language-javascript'>apply</code>&nbsp;invokes a function specifying the&nbsp;<code class='language-javascript'>this</code>&nbsp;or the "owner" object of that function on that time of invocation.</p>
<div class="highlight">
<pre class="highlight javascript"><code class='language-javascript'>const details = {
  message: 'Hello World!'
};

function getMessage(){
  return this.message;
}

getMessage.apply(details); // returns 'Hello World!'
</code></pre>
</div>
<p>This method works like&nbsp;<code class='language-javascript'>Function.prototype.call</code>&nbsp;the only difference is how we pass arguments. In&nbsp;<code class='language-javascript'>apply</code>&nbsp;we pass arguments as an array.</p>
<div class="highlight">
<pre class="highlight javascript"><code class='language-javascript'>const person = {
  name: "Marko Polo"
};

function greeting(greetingMessage) {
  return \`\${greetingMessage} \${this.name}\`;
}

greeting.apply(person, ['Hello']); // returns "Hello Marko Polo!"</code></pre>
</div>`,categories:[{name:"Code",id:2}],id:27},{question:"What is the use Function.prototype.call method?",answer:`<p>The&nbsp;<code class='language-javascript'>call</code>&nbsp;invokes a function specifying the&nbsp;<code class='language-javascript'>this</code>&nbsp;or the "owner" object of that function on that time of invocation.</p>
<div class="highlight">
<pre class="highlight javascript"><code class='language-javascript'>const details = {
  message: 'Hello World!'
};

function getMessage(){
  return this.message;
}

getMessage.call(details); // returns 'Hello World!'
</code></pre>
</div>
<p>This method works like&nbsp;<code class='language-javascript'>Function.prototype.apply</code>&nbsp;the only difference is how we pass arguments. In&nbsp;<code class='language-javascript'>call</code>&nbsp;we pass directly the arguments separating them with a comma&nbsp;<code class='language-javascript'>,</code>&nbsp;for every argument.</p>
<div class="highlight">
<pre class="highlight javascript"><code class='language-javascript'>const person = {
  name: "Marko Polo"
};

function greeting(greetingMessage) {
  return \`\${greetingMessage} \${this.name}\`;
}

greeting.call(person, 'Hello'); // returns "Hello Marko Polo!"</code></pre>
</div>`,categories:[{name:"Code",id:2}],id:28},{question:"What's the difference between Function.prototype.apply and Function.prototype.call?",answer:`<p>The only difference between&nbsp;<code class='language-javascript'>apply</code>&nbsp;and&nbsp;<code class='language-javascript'>call</code>&nbsp;is how we pass the&nbsp;<strong>arguments</strong>&nbsp;in the function being called. In&nbsp;<code class='language-javascript'>apply</code>&nbsp;we pass the arguments as an&nbsp;<strong>array</strong>&nbsp;and in&nbsp;<code class='language-javascript'>call</code>&nbsp;we pass the arguments directly in the argument list.</p>
<div class="highlight">
<pre class="highlight javascript"><code class='language-javascript'>const obj1 = {
 result:0
};

const obj2 = {
 result:0
};

function reduceAdd(){
   let result = 0;
   for(let i = 0, len = arguments.length; i &lt; len; i++){
     result += arguments[i];
   }
   this.result = result;
}

reduceAdd.apply(obj1, [1, 2, 3, 4, 5]); // returns 15
reduceAdd.call(obj2, 1, 2, 3, 4, 5); // returns 15</code></pre>
</div>`,categories:[{name:"Code",id:2}],id:29},{question:"What is the usage of Function.prototype.bind?",answer:`<p>The&nbsp;<code class='language-javascript'>bind</code>&nbsp;method returns a new function that is&nbsp;<em>bound</em><br />to a specific&nbsp;<code class='language-javascript'>this</code>&nbsp;value or the "owner" object, So we can use it later in our code. The&nbsp;<code class='language-javascript'>call</code>,<code class='language-javascript'>apply</code>&nbsp;methods invokes the function immediately instead of returning a new function like the&nbsp;<code class='language-javascript'>bind</code>&nbsp;method.</p>
<div class="highlight">
<pre class="highlight javascript"><code class='language-javascript'>import React from 'react';

class MyComponent extends React.Component {
     constructor(props){
          super(props); 
          this.state = {
             value : ""
          }  
          this.handleChange = this.handleChange.bind(this); 
          // Binds the "handleChange" method to the "MyComponent" component
     }

     handleChange(e){
       //do something amazing here
     }

     render(){
        return (
              &lt;&gt;
                &lt;input type={this.props.type}
                        value={this.state.value}
                     onChange={this.handleChange}                      
                  /<span class="err">&gt;
              &lt;/<span class="err">&gt;
        )
     }
}</code></pre>
</div>`,categories:[{name:"Code",id:2}],id:30},{question:"What is Functional Programming and what are the features of JavaScript that makes it a candidate as a functional language?",answer:`<p><strong>Functional Programming</strong>&nbsp;is a&nbsp;<strong>declarative</strong>&nbsp;programming paradigm or pattern on how we build our applications with&nbsp;<strong>functions</strong>&nbsp;using&nbsp;<strong>expressions</strong>&nbsp;that calculates a value without mutating or changing the arguments that are passed to it.</p>
<p>JavaScript&nbsp;<strong>Array</strong>&nbsp;has&nbsp;<strong>map</strong>,&nbsp;<strong>filter</strong>,&nbsp;<strong>reduce</strong>&nbsp;methods which are the most famous functions in the functional programming world because of their usefulness and because they don't mutate or change the array which makes these functions&nbsp;<strong>pure</strong>&nbsp;and JavaScript supports&nbsp;<strong>Closures</strong>&nbsp;and&nbsp;<strong>Higher Order Functions</strong>&nbsp;which are a characteristic of a&nbsp;<strong>Functional Programming Language</strong>.</p>
<ul>
<li>The&nbsp;<strong>map</strong>&nbsp;method creates a new array with the results of calling a provided callback function on every element in the array.</li>
</ul>
<div class="highlight">
<pre class="highlight javascript"><code class='language-javascript'>const words = ["Functional", "Procedural", "Object-Oriented"];

const wordsLength = words.map(word =&gt; word.length);
</code></pre>
</div>
<ul>
<li>The&nbsp;<strong>filter</strong>&nbsp;method creates a new array with all elements that pass the test in the callback function.</li>
</ul>
<div class="highlight">
<pre class="highlight javascript"><code class='language-javascript'>const data = [
  { name: 'Mark', isRegistered: true },
  { name: 'Mary', isRegistered: false },
  { name: 'Mae', isRegistered: true }
];

const registeredUsers = data.filter(user =&gt; user.isRegistered);
</code></pre>
</div>
<ul>
<li>The&nbsp;<strong>reduce</strong>&nbsp;method applies a function against an accumulator and each element in the array (from left to right) to reduce it to a single value.</li>
</ul>
<div class="highlight">
<pre class="highlight javascript"><code class='language-javascript'>const strs = ["I", " ", "am", " ", "Iron", " ", "Man"];
const result = strs.reduce((acc, currentStr) =&gt; acc + currentStr, "");</code></pre>
</div>`,categories:[{name:"Code",id:2}],id:31},{question:"What are Higher Order Functions?",answer:`<p><strong>Higher-Order Function</strong>&nbsp;are functions that can return a function or receive argument or arguments which have a value of a function.</p>
<div class="highlight">
<pre class="highlight javascript"><code class='language-javascript'>function higherOrderFunction(param,callback){
    return callback(param);
}</code></pre>
</div>`,categories:[{name:"Code",id:2}],id:32},{question:"Why are functions called First-class Objects?",answer:"<p><strong>Functions</strong>&nbsp;in JavaScript are&nbsp;<strong>First-class Objects</strong>&nbsp;because they are treated as any other value in the language. They can be assigned to&nbsp;<strong>variables</strong>, they can be&nbsp;<strong>properties of an object</strong>&nbsp;which are called&nbsp;<strong>methods</strong>, they can be an&nbsp;<strong>item in array</strong>, they can be&nbsp;<strong>passed as arguments to a function</strong>, and they can be&nbsp;<strong>returned as values of a function</strong>. The only difference between a function and any other value in&nbsp;<strong>JavaScript</strong>&nbsp;is that&nbsp;<strong>functions</strong>&nbsp;can be invoked or called.</p>",categories:[{name:"Code",id:2}],id:33},{question:"Implement the Array.prototype.map method by hand.",answer:`<div class="highlight">
<pre class="highlight javascript"><code class='language-javascript'>function map(arr, mapCallback) {
  // First, we check if the parameters passed are right.
  if (!Array.isArray(arr) || !arr.length || typeof mapCallback !== 'function') { 
    return [];
  } else {
    let result = [];
    // We're making a results array every time we call this function
    // because we don't want to mutate the original array.
    for (let i = 0, len = arr.length; i &lt; len; i++) {
      result.push(mapCallback(arr[i], i, arr)); 
      // push the result of the mapCallback in the 'result' array
    }
    return result; // return the result array
  }
}
</code></pre>
</div>
<p>As the MDN description of the&nbsp;<code class='language-javascript'>Array.prototype.map</code>&nbsp;method.</p>
<p><strong>The map() method creates a new array with the results of calling a provided function on every element in the calling array.</strong></p>`,categories:[{name:"Code",id:2}],id:34},{question:"Implement the Array.prototype.filter method by hand.",answer:`<div class="highlight">
<pre class="highlight javascript"><code class='language-javascript'>function filter(arr, filterCallback) {
  // First, we check if the parameters passed are right.
  if (!Array.isArray(arr) || !arr.length || typeof filterCallback !== 'function') 
  {
    return [];
  } else {
    let result = [];
    // We're making a results array every time we call this function
    // because we don't want to mutate the original array.
    for (let i = 0, len = arr.length; i &lt; len; i++) {
      // check if the return value of the filterCallback is true or "truthy"
      if (filterCallback(arr[i], i, arr)) { 
      // push the current item in the 'result' array if the condition is true
        result.push(arr[i]);
      }
    }
    return result; // return the result array
  }
}
</code></pre>
</div>
<p>As the MDN description of the&nbsp;<code class='language-javascript'>Array.prototype.filter</code>&nbsp;method.</p>
<p><strong>The filter() method creates a new array with all elements that pass the test implemented by the provided function.</strong></p>`,categories:[{name:"Code",id:2}],id:35},{question:"Implement the Array.prototype.reduce method by hand.",answer:`<div class="highlight">
<pre class="highlight javascript"><code class='language-javascript'>function reduce(arr, reduceCallback, initialValue) {
  // First, we check if the parameters passed are right.
  if (!Array.isArray(arr) || !arr.length || typeof reduceCallback !== 'function') 
  {
    return [];
  } else {
    // If no initialValue has been passed to the function we're gonna use the 
    let hasInitialValue = initialValue !== undefined;
    let value = hasInitialValue ? initialValue : arr[0];
    // first array item as the initialValue

    // Then we're gonna start looping at index 1 if there is no 
    // initialValue has been passed to the function else we start at 0 if 
    // there is an initialValue.
    for (let i = hasInitialValue ? 0 : 1, len = arr.length; i &lt; len; i++) {
      // Then for every iteration we assign the result of the 
      // reduceCallback to the variable value.
      value = reduceCallback(value, arr[i], i, arr); 
    }
    return value;
  }
}
</code></pre>
</div>
<p>As the MDN description of the&nbsp;<code class='language-javascript'>Array.prototype.reduce</code>&nbsp;method.</p>
<p><strong>The reduce() method executes a reducer function (that you provide) on each element of the array, resulting in a single output value.</strong></p>`,categories:[{name:"Code",id:2}],id:36},{question:"What is the arguments object?",answer:`<p>The&nbsp;<strong>arguments</strong>&nbsp;object is a collection of parameter values pass in a function. It's an&nbsp;<strong>Array-like</strong>&nbsp;object because it has a&nbsp;<strong>length</strong>&nbsp;property and we can access individual values using array indexing notation&nbsp;<code class='language-javascript'>arguments[1]</code>&nbsp;but it does not have the built-in methods in an array&nbsp;<code class='language-javascript'>forEach</code>,<code class='language-javascript'>reduce</code>,<code class='language-javascript'>filter</code>&nbsp;and&nbsp;<code class='language-javascript'>map</code>.<br />It helps us know the number of arguments pass in a function.</p>
<p>We can convert the&nbsp;<code class='language-javascript'>arguments</code>&nbsp;object into an array using the&nbsp;<code class='language-javascript'>Array.prototype.slice</code>.</p>
<div class="highlight">
<pre class="highlight javascript"><code class='language-javascript'>function one() {
  return Array.prototype.slice.call(arguments);
}
</code></pre>
</div>
<p>Note:&nbsp;<strong>the&nbsp;<code class='language-javascript'>arguments</code>&nbsp;object does not work on ES6 arrow functions.</strong></p>
<div class="highlight">
<pre class="highlight javascript"><code class='language-javascript'>function one() {
  return arguments;
}
const two = function () {
  return arguments;
}
const three = function three() {
  return arguments;
}

const four = () =&gt; arguments;

four(); // Throws an error  - arguments is not defined
</code></pre>
</div>
<p>When we invoke the function&nbsp;<code class='language-javascript'>four</code>&nbsp;it throws a&nbsp;<code class='language-javascript'>ReferenceError: arguments is not defined</code>&nbsp;error. We can solve this problem if your envinroment supports the&nbsp;<strong>rest syntax</strong>.</p>
<div class="highlight">
<pre class="highlight javascript"><code class='language-javascript'>const four = (...args) =&gt; args;
</code></pre>
</div>
<p>This puts all parameter values in an array automatically.</p>`,categories:[{name:"Code",id:2}],id:37},{question:"How to create an object without a prototype?",answer:`<p>We can create an object without a&nbsp;<em>prototype</em>&nbsp;using the&nbsp;<code class='language-javascript'>Object.create</code>&nbsp;method.</p>
<div class="highlight">
<pre class="highlight javascript"><code class='language-javascript'>   const o1 = {};
   console.log(o1.toString()); 
   // logs [object Object] get this method to the Object.prototype 

   const o2 = Object.create(null);
   // the first parameter is the prototype of the object "o2" which in this
   // case will be null specifying we don't want any prototype
   console.log(o2.toString());
   // throws an error o2.toString is not a function </code></pre>
</div>`,categories:[{name:"Code",id:2}],id:38},{question:"Why does b in this code become a global variable when you call this function?",answer:`<div class="highlight">
<pre class="highlight javascript"><code class='language-javascript'>function myFunc() {
  let a = b = 0;
}

myFunc();
</code></pre>
</div>
<p>The reason for this is that&nbsp;<strong>assignment operator</strong>&nbsp;or&nbsp;<strong>=</strong>&nbsp;has right-to-left&nbsp;<strong>associativity</strong>&nbsp;or&nbsp;<strong>evaluation</strong>. What this means is that when multiple assignment operators appear in a single expression they evaluated from right to left. So our code becomes likes this.</p>
<div class="highlight">
<pre class="highlight javascript"><code class='language-javascript'>function myFunc() {
  let a = (b = 0);
}

myFunc();
</code></pre>
</div>
<p>First, the expression&nbsp;<code class='language-javascript'>b = 0</code>&nbsp;evaluated and in this example&nbsp;<code class='language-javascript'>b</code>&nbsp;is not declared. So, The JS Engine makes a global variable&nbsp;<code class='language-javascript'>b</code>&nbsp;outside this function after that the return value of the expression&nbsp;<code class='language-javascript'>b = 0</code>&nbsp;would be 0 and it's assigned to the new local variable&nbsp;<code class='language-javascript'>a</code>&nbsp;with a&nbsp;<code class='language-javascript'>let</code>&nbsp;keyword.</p>
<p>We can solve this problem by declaring the variables first before assigning them with value.</p>
<div class="highlight">
<pre class="highlight javascript"><code class='language-javascript'>function myFunc() {
  let a,b;
  a = b = 0;
}
myFunc();</code></pre>
</div>`,categories:[{name:"Code",id:2}],id:39},{question:"What is ECMAScript?",answer:"<p><strong>ECMAScript</strong>&nbsp;is a standard for making scripting languages which means that&nbsp;<strong>JavaScript</strong>&nbsp;follows the specification changes in&nbsp;<strong>ECMAScript</strong>&nbsp;standard because it is the&nbsp;<strong>blueprint</strong>&nbsp;of&nbsp;<strong>JavaScript</strong>.</p>",categories:[{name:"Code",id:2}],id:40},{question:"What are the new features in ES6 or ECMAScript 2015?",answer:`<ul>
<li>
<p>Arrow Functions</p>
</li>
<li>
<p>Classes</p>
</li>
<li>
<p>Template Strings</p>
</li>
<li>
<p><strong>Enhanced Object literals</strong></p>
</li>
<li>
<p>Object Destructuring</p>
</li>
<li>
<p>Promises</p>
</li>
<li>
<p><strong>Generators</strong></p>
</li>
<li>
<p>Modules</p>
</li>
<li>
<p>Symbol</p>
</li>
<li>
<p><strong>Proxies</strong></p>
</li>
<li>
<p>Sets</p>
</li>
<li>
<p>Default Function parameters</p>
</li>
<li>
<p>Rest and Spread</p>
</li>
<li>
<p>Block Scoping with&nbsp;<code class='language-javascript'>let</code>&nbsp;and&nbsp;<code class='language-javascript'>const</code></p>
</li>
</ul>`,categories:[{name:"Code",id:2}],id:41},{question:"What's the difference between var, let and const keywords?",answer:`<p>Variables declared with&nbsp;<code class='language-javascript'>var</code>&nbsp;keyword are&nbsp;<em>function scoped</em>.<br />What this means that variables can be accessed across that function even if we declare that variable inside a block.</p>
<div class="highlight">
<pre class="highlight javascript"><code class='language-javascript'>function giveMeX(showX) {
  if (showX) {
    var x = 5;
  }
  return x;
}

console.log(giveMeX(false));
console.log(giveMeX(true));
</code></pre>
</div>
<p>The first&nbsp;<code class='language-javascript'>console.log</code>&nbsp;statement logs&nbsp;<code class='language-javascript'>undefined</code><br />and the second&nbsp;<code class='language-javascript'>5</code>. We can access the&nbsp;<code class='language-javascript'>x</code>&nbsp;variable due<br />to the reason that it gets&nbsp;<em>hoisted</em>&nbsp;at the top of the function scope. So our function code is intepreted like this.</p>
<div class="highlight">
<pre class="highlight javascript"><code class='language-javascript'>function giveMeX(showX) {
  var x; // has a default value of undefined
  if (showX) {
    x = 5;
  }
  return x;
}
</code></pre>
</div>
<p>If you are wondering why it logs&nbsp;<code class='language-javascript'>undefined</code>&nbsp;in the first&nbsp;<code class='language-javascript'>console.log</code>&nbsp;statement remember variables declared without an initial value has a default value of&nbsp;<code class='language-javascript'>undefined</code>.</p>
<p>Variables declared with&nbsp;<code class='language-javascript'>let</code>&nbsp;and&nbsp;<code class='language-javascript'>const</code>&nbsp;keyword are&nbsp;<em>block scoped</em>. What this means that variable can only be accessed on that block&nbsp;<code class='language-javascript'>{}</code>&nbsp;on where we declare it.</p>
<div class="highlight">
<pre class="highlight javascript"><code class='language-javascript'>function giveMeX(showX) {
  if (showX) {
    let x = 5;
  }
  return x;
}


function giveMeY(showY) {
  if (showY) {
    let y = 5;
  }
  return y;
}
</code></pre>
</div>
<p>If we call this functions with an argument of&nbsp;<code class='language-javascript'>false</code>&nbsp;it throws a&nbsp;<code class='language-javascript'>Reference Error</code>&nbsp;because we can't access the&nbsp;<code class='language-javascript'>x</code>&nbsp;and&nbsp;<code class='language-javascript'>y</code>&nbsp;variables outside that block and those variables are not&nbsp;<em>hoisted</em>.</p>
<p>There is also a difference between&nbsp;<code class='language-javascript'>let</code>&nbsp;and&nbsp;<code class='language-javascript'>const</code>&nbsp;we can assign new values using&nbsp;<code class='language-javascript'>let</code>&nbsp;but we can't in&nbsp;<code class='language-javascript'>const</code>&nbsp;but&nbsp;<code class='language-javascript'>const</code>&nbsp;are mutable meaning. What this means is if the value that we assign to a&nbsp;<code class='language-javascript'>const</code>&nbsp;is an object we can change the values of those properties but can't reassign a new value to that variable.</p>`,categories:[{name:"Code",id:2}],id:42},{question:"What are Arrow functions?",answer:`<p><strong>Arrow Functions</strong>&nbsp;are a new way of making functions in JavaScript.&nbsp;<strong>Arrow Functions</strong>&nbsp;takes a little time in making functions and has a cleaner syntax than a&nbsp;<strong>function expression</strong>&nbsp;because we omit the&nbsp;<code class='language-javascript'>function</code>&nbsp;keyword in making them.</p>
<div class="highlight">
<pre class="highlight javascript"><code class='language-javascript'>//ES5 Version
var getCurrentDate = function (){
  return new Date();
}

//ES6 Version
const getCurrentDate = () =&gt; new Date();
</code></pre>
</div>
<p>In this example, in the ES5 Version have&nbsp;<code class='language-javascript'>function(){}</code>&nbsp;declaration and&nbsp;<code class='language-javascript'>return</code>&nbsp;keyword needed to make a function and return a value respectively. In the&nbsp;<strong>Arrow Function</strong>&nbsp;version we only need the&nbsp;<code class='language-javascript'>()</code>&nbsp;parentheses and we don't need a&nbsp;<code class='language-javascript'>return</code>&nbsp;statement because&nbsp;<strong>Arrow Functions</strong>&nbsp;have a implicit return if we have only one expression or value to return.</p>
<div class="highlight">
<pre class="highlight javascript"><code class='language-javascript'>//ES5 Version
function greet(name) {
  return 'Hello ' + name + '!';
}

//ES6 Version
const greet = (name) =&gt; \`Hello \${name}\`;
const greet2 = name =&gt; \`Hello \${name}\`;

</code></pre>
</div>
<p>We can also parameters in&nbsp;<strong>Arrow functions</strong>&nbsp;the same as the&nbsp;<strong>function expressions</strong>&nbsp;and&nbsp;<strong>function declarations</strong>. If we have one parameter in an&nbsp;<strong>Arrow Function</strong>&nbsp;we can omit the parentheses it is also valid.</p>
<div class="highlight">
<pre class="highlight javascript"><code class='language-javascript'>const getArgs = () =&gt; arguments

const getArgs2 = (...rest) =&gt; rest
</code></pre>
</div>
<p><strong>Arrow functions</strong>&nbsp;don't have access to the&nbsp;<code class='language-javascript'>arguments</code>&nbsp;object. So calling the first&nbsp;<code class='language-javascript'>getArgs</code>&nbsp;func will throw an Error. Instead we can use the&nbsp;<strong>rest parameters</strong>&nbsp;to get all the arguments passed in an arrow function.</p>
<div class="highlight">
<pre class="highlight javascript"><code class='language-javascript'>const data = {
  result: 0,
  nums: [1, 2, 3, 4, 5],
  computeResult() {
    // "this" here refers to the "data" object
    const addAll = () =&gt; {
      // arrow functions "copies" the "this" value of 
      // the lexical enclosing function
      return this.nums.reduce((total, cur) =&gt; total + cur, 0)
    };
    this.result = addAll();
  }
};
</code></pre>
</div>
<p><strong>Arrow functions</strong>&nbsp;don't have their own&nbsp;<code class='language-javascript'>this</code>&nbsp;value. It captures or gets the&nbsp;<code class='language-javascript'>this</code>&nbsp;value of lexically enclosing function or in this example, the&nbsp;<code class='language-javascript'>addAll</code>&nbsp;function copies the&nbsp;<code class='language-javascript'>this</code>&nbsp;value of the&nbsp;<code class='language-javascript'>computeResult</code>&nbsp;method and if we declare an arrow function in the global scope the value of&nbsp;<code class='language-javascript'>this</code>&nbsp;would be the&nbsp;<code class='language-javascript'>window</code>&nbsp;object.</p>`,categories:[{name:"Code",id:2}],id:43},{question:"What are Classes?",answer:`<p><strong>Classes</strong>&nbsp;is the new way of writing&nbsp;<em>constructor functions</em>&nbsp;in&nbsp;<strong>JavaScript</strong>. It is&nbsp;<em>syntactic sugar</em>&nbsp;for using&nbsp;<em>constructor functions</em>, it still uses&nbsp;<strong>prototypes</strong>&nbsp;and&nbsp;<strong>Prototype-Based Inheritance</strong>&nbsp;under the hood.</p>
<div class="highlight">
<pre class="highlight javascript"><code class='language-javascript'>   //ES5 Version
   function Person(firstName, lastName, age, address){
      this.firstName = firstName;
      this.lastName = lastName;
      this.age = age;
      this.address = address;
   }

   Person.self = function(){
     return this;
   }

   Person.prototype.toString = function(){
     return "[object Person]";
   }

   Person.prototype.getFullName = function (){
     return this.firstName + " " + this.lastName;
   }  

   //ES6 Version
   class Person {
        constructor(firstName, lastName, age, address){
            this.lastName = lastName;
            this.firstName = firstName;
            this.age = age;
            this.address = address;
        }

        static self() {
           return this;
        }

        toString(){
           return "[object Person]";
        }

        getFullName(){
           return \`\${this.firstName} \${this.lastName}\`;
        }
   }
</code></pre>
</div>
<p><strong>Overriding Methods</strong>&nbsp;and&nbsp;<strong>Inheriting from another class</strong>.</p>
<div class="highlight">
<pre class="highlight javascript"><code class='language-javascript'>//ES5 Version
Employee.prototype = Object.create(Person.prototype);

function Employee(firstName, lastName, age, address, jobTitle, yearStarted) {
  Person.call(this, firstName, lastName, age, address);
  this.jobTitle = jobTitle;
  this.yearStarted = yearStarted;
}

Employee.prototype.describe = function () {
  return \`I am \${this.getFullName()} and I have a position of \${this.jobTitle} and I started at \${this.yearStarted}\`;
}

Employee.prototype.toString = function () {
  return "[object Employee]";
}

//ES6 Version
class Employee extends Person { //Inherits from "Person" class
  constructor(firstName, lastName, age, address, jobTitle, yearStarted) {
    super(firstName, lastName, age, address);
    this.jobTitle = jobTitle;
    this.yearStarted = yearStarted;
  }

  describe() {
    return \`I am \${this.getFullName()} and I have a position of \${this.jobTitle} and I started at \${this.yearStarted}\`;
  }

  toString() { // Overriding the "toString" method of "Person"
    return "[object Employee]";
  }
}

</code></pre>
</div>
<p>So how do we know that it uses&nbsp;<em>prototypes</em>&nbsp;under the hood?</p>
<div class="highlight">
<pre class="highlight javascript"><code class='language-javascript'>   class Something {

   }

   function AnotherSomething(){

   }
   const as = new AnotherSomething();
   const s = new Something();

   console.log(typeof Something); // logs "function"
   console.log(typeof AnotherSomething); // logs "function"
   console.log(as.toString()); // logs "[object Object]"
   console.log(as.toString()); // logs "[object Object]"
   console.log(as.toString === Object.prototype.toString); 
   console.log(s.toString === Object.prototype.toString); 
   // both logs return true indicating that we are still using 
   // prototypes under the hoods because the Object.prototype is
   // the last part of the Prototype Chain and "Something"
   // and "AnotherSomething" both inherit from Object.prototype</code></pre>
</div>`,categories:[{name:"Code",id:2}],id:44},{question:"What are Template Literals?",answer:`<p><strong>Template Literals</strong>&nbsp;are a new way of making&nbsp;<strong>strings</strong>&nbsp;in JavaScript. We can make&nbsp;<strong>Template Literal</strong>&nbsp;by using the backtick or back-quote symbol.</p>
<div class="highlight">
<pre class="highlight javascript"><code class='language-javascript'>//ES5 Version
var greet = 'Hi I\\'m Mark';

//ES6 Version
let greet = \`Hi I'm Mark\`;
</code></pre>
</div>
<p>In the ES5 version, we need to escape the&nbsp;<code class='language-javascript'>'</code>&nbsp;using the&nbsp;<code class='language-javascript'>\\</code>&nbsp;to&nbsp;<em>escape</em>&nbsp;the normal functionality of that symbol which in this case is to finish that string value. In Template Literals, we don't need to do that.</p>
<div class="highlight">
<pre class="highlight javascript"><code class='language-javascript'>//ES5 Version
var lastWords = '\\n'
  + '   I  \\n'
  + '   Am  \\n'
  + 'Iron Man \\n';


//ES6 Version
let lastWords = \`
    I
    Am
  Iron Man   
\`;
</code></pre>
</div>
<p>In the ES5 version, we need to add this&nbsp;<code class='language-javascript'>\\n</code>&nbsp;to have a new line in our string. In Template Literals, we don't need to do that.</p>
<div class="highlight">
<pre class="highlight javascript"><code class='language-javascript'>//ES5 Version
function greet(name) {
  return 'Hello ' + name + '!';
}


//ES6 Version
const greet = name =&gt; {
  return \`Hello \${name} !\`;
}
</code></pre>
</div>
<p>In the ES5 version, If we need to add an expression or value in a string we need to use the&nbsp;<code class='language-javascript'>+</code>&nbsp;or string concatenation operator. In Template Literals, we can embed an expression using&nbsp;<code class='language-javascript'>\${expr}</code>&nbsp;which makes it cleaner than the ES5 version.</p>`,categories:[{name:"Code",id:2}],id:45},{question:"What is Object Destructuring?",answer:`<p><strong>Object Destructuring</strong>&nbsp;is a new and cleaner way of&nbsp;<strong>getting</strong>&nbsp;or&nbsp;<strong>extracting</strong>&nbsp;values from an object or an array.</p>
<p>Suppose we have an object that looks like this.</p>
<div class="highlight">
<pre class="highlight javascript"><code class='language-javascript'>const employee = {
  firstName: "Marko",
  lastName: "Polo",
  position: "Software Developer",
  yearHired: 2017
};

</code></pre>
</div>
<p>The old way of getting properties from an object is we make a variable that has the same name as the object property. This way is a hassle because we're making a new variable for every property. Imagine we have a big object with lots of properties and methods using this way in extracting properties will be irritating.</p>
<div class="highlight">
<pre class="highlight javascript"><code class='language-javascript'>var firstName = employee.firstName;
var lastName = employee.lastName;
var position = employee.position;
var yearHired = employee.yearHired;
</code></pre>
</div>
<p>If we use&nbsp;<strong>object destructuring</strong>&nbsp;it looks cleaner and takes a little time than the old way. The syntax for object destructuring is that if we are getting properties in an object we use the&nbsp;<code class='language-javascript'>{}</code>&nbsp;and inside that, we specify the properties we want to extract and if we are getting data from an array we use the&nbsp;<code class='language-javascript'>[]</code>.</p>
<div class="highlight">
<pre class="highlight javascript"><code class='language-javascript'>let { firstName, lastName, position, yearHired } = employee;
</code></pre>
</div>
<p>If we want to change the variable name we want to extract we use the&nbsp;<code class='language-javascript'>propertyName:newName</code>&nbsp;syntax. In this example the value of&nbsp;<code class='language-javascript'>fName</code>&nbsp;variable will hold the value of the&nbsp;<code class='language-javascript'>firstName</code>&nbsp;property and&nbsp;<code class='language-javascript'>lName</code>&nbsp;variable will hold the value of the&nbsp;<code class='language-javascript'>lastName</code>&nbsp;property.</p>
<div class="highlight">
<pre class="highlight javascript"><code class='language-javascript'>let { firstName: fName, lastName: lName, position, yearHired } = employee;
</code></pre>
</div>
<p>We can also have default values when destructuring. In this example, if the&nbsp;<code class='language-javascript'>firstName</code>&nbsp;property holds an&nbsp;<code class='language-javascript'>undefined</code>&nbsp;value in the object then when we destructure the&nbsp;<code class='language-javascript'>firstName</code>&nbsp;variable will hold a default of&nbsp;<code class='language-javascript'>"Mark"</code>.</p>
<div class="highlight">
<pre class="highlight javascript"><code class='language-javascript'>let { firstName = "Mark", lastName: lName, position, yearHired } = employee;
</code></pre>
</div>
<h3><a class="anchor" href="https://dev.to/macmacky/70-javascript-interview-questions-5gfi#47-what-are-es6-modules" name="47-what-are-es6-modules"></a></h3>`,categories:[{name:"Code",id:2}],id:46},{question:"What are ES6 Modules?",answer:`<p><strong>Modules</strong>&nbsp;lets us split our code base to multiple files for more maintainability and this lets us avoid putting all of our code in one big file (yucksss). Before ES6 has supported Modules there were two popular module systems that were used for Code Maintainability in&nbsp;<strong>JavaScript</strong>.</p>
<ul>
<li>CommonJS -&nbsp;<strong>Nodejs</strong></li>
<li>AMD (Asynchronous Module Definition) -&nbsp;<strong>Browsers</strong></li>
</ul>
<p>Basically, the sytanx for using modules are straightforward,<br /><code class='language-javascript'>import</code>&nbsp;is used for&nbsp;<em>getting</em>&nbsp;functionality from another file or several functionalities or values while<br /><code class='language-javascript'>export</code>&nbsp;is used for&nbsp;<em>exposing</em>&nbsp;functionality from a file or several functionalities or values.</p>
<p><strong>Exporting functionalites in a File or Named Exports</strong></p>
<p><em>Using ES5 (CommonJS)</em></p>
<div class="highlight">
<pre class="highlight javascript"><code class='language-javascript'>// Using ES5 CommonJS - helpers.js
exports.isNull = function (val) {
  return val === null;
}

exports.isUndefined = function (val) {
  return val === undefined;
}

exports.isNullOrUndefined = function (val) {
  return exports.isNull(val) || exports.isUndefined(val);
}
</code></pre>
</div>
<p><em>Using ES6 Modules</em></p>
<div class="highlight">
<pre class="highlight javascript"><code class='language-javascript'>// Using ES6 Modules - helpers.js
export function isNull(val){
  return val === null;
}

export function isUndefined(val) {
  return val === undefined;
}

export function isNullOrUndefined(val) {
  return isNull(val) || isUndefined(val);
}


</code></pre>
</div>
<p><strong>Importing functionalites in another File</strong></p>
<div class="highlight">
<pre class="highlight javascript"><code class='language-javascript'>// Using ES5 (CommonJS) - index.js
const helpers = require('./helpers.js'); // helpers is an object
const isNull = helpers.isNull;
const isUndefined = helpers.isUndefined;
const isNullOrUndefined = helpers.isNullOrUndefined;

// or if your environment supports Destructuring
const { isNull, isUndefined, isNullOrUndefined } = require('./helpers.js');
</code></pre>
</div>
<div class="highlight">
<pre class="highlight javascript"><code class='language-javascript'>// ES6 Modules - index.js
import * as helpers from './helpers.js'; // helpers is an object

// or 

import { isNull, isUndefined, isNullOrUndefined as isValid } from './helpers.js';

// using "as" for renaming named exports
</code></pre>
</div>
<p><strong>Exporting a Single Functionality in a File or Default Exports</strong></p>
<p><em>Using ES5 (CommonJS)</em></p>
<div class="highlight">
<pre class="highlight javascript"><code class='language-javascript'>// Using ES5 (CommonJS) - index.js
class Helpers {
  static isNull(val) {
    return val === null;
  }

  static isUndefined(val) {
    return val === undefined;
  }

  static isNullOrUndefined(val) {
    return this.isNull(val) || this.isUndefined(val);
  }
}


module.exports = Helpers;
</code></pre>
</div>
<p><em>Using ES6 Modules</em></p>
<div class="highlight">
<pre class="highlight javascript"><code class='language-javascript'>// Using ES6 Modules - helpers.js
class Helpers {
  static isNull(val) {
    return val === null;
  }

  static isUndefined(val) {
    return val === undefined;
  }

  static isNullOrUndefined(val) {
    return this.isNull(val) || this.isUndefined(val);
  }
}

export default Helpers
</code></pre>
</div>
<p><strong>Importing a Single Functionality from another File</strong></p>
<p><em>Using ES5 (CommonJS)</em></p>
<div class="highlight">
<pre class="highlight javascript"><code class='language-javascript'>// Using ES5 (CommonJS) - index.js
const Helpers = require('./helpers.js'); 
console.log(Helpers.isNull(null));
</code></pre>
</div>
<p><em>Using ES6 Modules</em></p>
<div class="highlight">
<pre class="highlight javascript"><code class='language-javascript'>import Helpers from '.helpers.js'
console.log(Helpers.isNull(null));
</code></pre>
</div>
<p>This is the basics of using&nbsp;<strong>ES6 Modules</strong>. I won't explain all about Modules because it's a broad topic and my Post is now really long.</p>`,categories:[{name:"Code",id:2}],id:47},{question:"What is the Set object and how does it work?",answer:`<p>The&nbsp;<strong>Set</strong>&nbsp;object is an&nbsp;<strong>ES6</strong>&nbsp;feature that lets you store unique values,&nbsp;<strong>primitives</strong>&nbsp;or&nbsp;<strong>object references</strong>. A value in a Set can only occur&nbsp;<strong>once</strong>. It checks if a value exists in the set object using the&nbsp;<strong>SameValueZero</strong>&nbsp;algorithm.</p>
<p>We can make&nbsp;<code class='language-javascript'>Set</code>&nbsp;instance using&nbsp;<code class='language-javascript'>Set</code>&nbsp;constructor and we can optionally pass an&nbsp;<code class='language-javascript'>Iterable</code>&nbsp;as the initial value.</p>
<div class="highlight">
<pre class="highlight javascript"><code class='language-javascript'>
const set1 = new Set();
const set2 = new Set(["a","b","c","d","d","e"]);

</code></pre>
</div>
<p>We can add a new value into the&nbsp;<code class='language-javascript'>Set</code>&nbsp;instance using the&nbsp;<code class='language-javascript'>add</code>&nbsp;method and since the&nbsp;<code class='language-javascript'>add</code>&nbsp;returns the&nbsp;<code class='language-javascript'>Set</code>&nbsp;object we can chain&nbsp;<code class='language-javascript'>add</code>&nbsp;calls. If a value already exists in&nbsp;<code class='language-javascript'>Set</code>&nbsp;object it will not be added again.</p>
<div class="highlight">
<pre class="highlight javascript"><code class='language-javascript'>
set2.add("f");
set2.add("g").add("h").add("i").add("j").add("k").add("k");
// the last "k" will not be added to the set object because it already exists

</code></pre>
</div>
<p>We can remove a value from the&nbsp;<code class='language-javascript'>Set</code>&nbsp;instance using the&nbsp;<code class='language-javascript'>delete</code>&nbsp;method, this method returns a&nbsp;<code class='language-javascript'>boolean</code>&nbsp;indicating&nbsp;<code class='language-javascript'>true</code>&nbsp;if a value exists in the&nbsp;<code class='language-javascript'>Set</code>&nbsp;object and&nbsp;<code class='language-javascript'>false</code>&nbsp;indicating that value does not exist.</p>
<div class="highlight">
<pre class="highlight javascript"><code class='language-javascript'>
set2.delete("k") // returns true because "k" exists in the set object
set2.delete("z") // returns false because "z" does not exists in the set object

</code></pre>
</div>
<p>We can check if a specific value exists in the&nbsp;<code class='language-javascript'>Set</code>&nbsp;instance using the&nbsp;<code class='language-javascript'>has</code>&nbsp;method.</p>
<div class="highlight">
<pre class="highlight javascript"><code class='language-javascript'>
set2.has("a") // returns true because "a" exists in the set object
set2.has("z") // returns false because "z" does not exists in the set object

</code></pre>
</div>
<p>We can get the length of the&nbsp;<code class='language-javascript'>Set</code>&nbsp;instance using the&nbsp;<code class='language-javascript'>size</code>&nbsp;property.</p>
<div class="highlight">
<pre class="highlight javascript"><code class='language-javascript'>
set2.size // returns 10

</code></pre>
</div>
<p>We can delete or remove all the elements in the&nbsp;<code class='language-javascript'>Set</code>&nbsp;instance using the&nbsp;<code class='language-javascript'>clear</code>.</p>
<div class="highlight">
<pre class="highlight javascript"><code class='language-javascript'>
set2.clear(); // clears the set data

</code></pre>
</div>
<p>We can use the&nbsp;<code class='language-javascript'>Set</code>&nbsp;object for removing duplicate elements in an array.</p>
<div class="highlight">
<pre class="highlight javascript"><code class='language-javascript'>
const numbers = [1, 2, 3, 4, 5, 6, 6, 7, 8, 8, 5];
const uniqueNums = [...new Set(numbers)]; // has a value of [1,2,3,4,5,6,7,8]
</code></pre>
</div>`,categories:[{name:"Code",id:2}],id:48},{question:"What is a Callback function?",answer:`<p>A&nbsp;<strong>Callback</strong>&nbsp;function is a function that is gonna get called at a later point in time.</p>
<div class="highlight">
<pre class="highlight javascript"><code class='language-javascript'>const btnAdd = document.getElementById('btnAdd');

btnAdd.addEventListener('click', function clickCallback(e) {
    // do something useless
});
</code></pre>
</div>
<p>In this example, we wait for the&nbsp;<code class='language-javascript'>click event</code>&nbsp;in the element with an id of&nbsp;<strong>btnAdd</strong>, if it is&nbsp;<code class='language-javascript'>clicked</code>, the&nbsp;<code class='language-javascript'>clickCallback</code>&nbsp;function is executed. A&nbsp;<strong>Callback</strong>&nbsp;function adds some functionality to some data or event. The&nbsp;<code class='language-javascript'>reduce</code>,&nbsp;<code class='language-javascript'>filter</code>&nbsp;and&nbsp;<code class='language-javascript'>map</code>&nbsp;methods in&nbsp;<strong>Array</strong>&nbsp;expects a callback as a parameter. A good analogy for a callback is when you call someone and if they don't answer you leave a message and you expect them to&nbsp;<strong>callback</strong>. The act of calling someone or leaving a&nbsp;<strong>message</strong>&nbsp;is the&nbsp;<strong>event or data</strong>&nbsp;and the&nbsp;<strong>callback</strong>&nbsp;is the&nbsp;<strong>action that you expect to occur later</strong>.</p>`,categories:[{name:"Code",id:2}],id:49},{question:"What are Promises?",answer:`<p><strong>Promises</strong>&nbsp;are one way in handling asynchronous operations in&nbsp;<strong>JavaScript</strong>. It represents the value of an asynchronous operation.&nbsp;<strong>Promises</strong>&nbsp;was made to solve the problem of doing and dealing with async code before promises we're using callbacks.</p>
<div class="highlight">
<pre class="highlight javascript"><code class='language-javascript'>fs.readFile('somefile.txt', function (e, data) {
  if (e) {
    console.log(e);
  }
  console.log(data);
});
</code></pre>
</div>
<p>The problem with this approach if we have another async operation inside the callback and another. We will have a code that is messy and unreadable. This code is called&nbsp;<strong>Callback Hell</strong>.</p>
<div class="highlight">
<pre class="highlight javascript"><code class='language-javascript'>//Callback Hell yucksss
fs.readFile('somefile.txt', function (e, data) {
  //your code here
  fs.readdir('directory', function (e, files) {
    //your code here
    fs.mkdir('directory', function (e) {
      //your code here
    })
  })
})
</code></pre>
</div>
<p>If we use promises in this code it will be more readable and easy to understand and easy to maintain.</p>
<div class="highlight">
<pre class="highlight javascript"><code class='language-javascript'>promReadFile('file/path')
  .then(data =&gt; {
    return promReaddir('directory');
  })
  .then(data =&gt; {
    return promMkdir('directory');
  })
  .catch(e =&gt; {
    console.log(e);
  })
</code></pre>
</div>
<p>Promises have 3 different states.</p>
<p><strong>Pending</strong>&nbsp;- The initial state of a promise. The promise's outcome has not yet been known because the operation has not been completed yet.</p>
<p><strong>Fulfilled</strong>&nbsp;- The async operation is completed and successful with the resulting value.</p>
<p><strong>Rejected</strong>&nbsp;- The async operation has failed and has a&nbsp;<em>reason</em>&nbsp;on why it failed.</p>
<p><strong>Settled</strong>&nbsp;- If the promise has been either&nbsp;<strong>Fulfilled</strong>&nbsp;or&nbsp;<strong>Rejected</strong>.</p>
<p>The&nbsp;<strong>Promise</strong>&nbsp;constructor has two parameters which are functions&nbsp;<code class='language-javascript'>resolve</code>&nbsp;and&nbsp;<code class='language-javascript'>reject</code>&nbsp;respectively.<br />If the async operation has been completed without errors call the&nbsp;<code class='language-javascript'>resolve</code>&nbsp;function to resolve the promise or if an error occurred<br />call the&nbsp;<code class='language-javascript'>reject</code>&nbsp;function and pass the error or reason to it.<br />We can access the result of the fulfilled promise using the&nbsp;<code class='language-javascript'>.then</code><br />method and we catch errors in the&nbsp;<code class='language-javascript'>.catch</code>&nbsp;method. We chain multiple async promise operations in the&nbsp;<code class='language-javascript'>.then</code>&nbsp;method because the&nbsp;<code class='language-javascript'>.then</code>&nbsp;method returns a&nbsp;<strong>Promise</strong>&nbsp;just like the example in the imag e above.</p>
<div class="highlight">
<pre class="highlight javascript"><code class='language-javascript'>const myPromiseAsync = (...args) =&gt; {
  return new Promise((resolve, reject) =&gt; {
    doSomeAsync(...args, (error, data) =&gt; {
      if (error) {
        reject(error);
      } else {
        resolve(data);
      }
    })
  })
}

myPromiseAsync()
  .then(result =&gt; {
    console.log(result);
  })
  .catch(reason =&gt; {
    console.log(reason);
  })
</code></pre>
</div>
<p>We can make a helper func that converts an async operation with a callback to promise. It works like the&nbsp;<strong>promisify</strong>&nbsp;utility function from the node core module&nbsp;<code class='language-javascript'>util</code>.</p>
<div class="highlight">
<pre class="highlight javascript"><code class='language-javascript'>const toPromise = (asyncFuncWithCallback) =&gt; {
  return (...args) =&gt; {
    return new Promise((res, rej) =&gt; {
      asyncFuncWithCallback(...args, (e, result) =&gt; {
        return e ? rej(e) : res(result);
      });
    });
  }
}

const promReadFile = toPromise(fs.readFile);

promReadFile('file/path')
  .then((data) =&gt; {
    console.log(data);
  })
  .catch(e =&gt; console.log(e));</code></pre>
</div>`,categories:[{name:"Code",id:2}],id:50},{question:"What is async/await and How does it work?",answer:`<p><em>async/await</em>&nbsp;is the new way of writing asynchronous or non-blocking code in&nbsp;<strong>JavaScript's</strong>. It is built on top of&nbsp;<strong>Promises</strong>. It makes writing asynchronous code more readable and cleaner than<br /><strong><a href="https://dev.to/macmacky/70-javascript-interview-questions-5gfi#50-what-are-promises">Promises</a></strong>&nbsp;and&nbsp;<strong><a href="https://dev.to/macmacky/70-javascript-interview-questions-5gfi#49-what-is-a-callback-function">Callbacks</a></strong>. But you must learn the basics of&nbsp;<strong>Promises</strong>&nbsp;before using this feature because as I said earlier it is built on top of&nbsp;<strong>Promises</strong>&nbsp;which means is still uses&nbsp;<strong>Promises</strong>&nbsp;under the hood.</p>
<p>Using Promises.</p>
<div class="highlight">
<pre class="highlight javascript"><code class='language-javascript'>function callApi() {
  return fetch("url/to/api/endpoint")
    .then(resp =&gt; resp.json())
    .then(data =&gt; {
      //do something with "data"
    }).catch(err =&gt; {
      //do something with "err"
    });
}

</code></pre>
</div>
<p>Using Async/Await.</p>
<p><strong>Note</strong>: We're using the old&nbsp;<em>try/catch</em>&nbsp;statement to&nbsp;<strong>catch</strong>&nbsp;any errors that happened in any of those async operations inside the&nbsp;<em>try</em>&nbsp;statement.</p>
<div class="highlight">
<pre class="highlight javascript"><code class='language-javascript'>async function callApi() {
  try {
    const resp = await fetch("url/to/api/endpoint");
    const data = await resp.json();
    //do something with "data"
  } catch (e) {
    //do something with "err"
  }
}
</code></pre>
</div>
<p><strong>Note</strong>: The&nbsp;<em>async</em>&nbsp;keyword before the function declaration makes the function return&nbsp;<em>implicitly</em>&nbsp;a&nbsp;<strong>Promise</strong>.</p>
<div class="highlight">
<pre class="highlight javascript"><code class='language-javascript'>const giveMeOne = async () =&gt; 1;

giveMeOne()
  .then((num) =&gt; {
    console.log(num); // logs 1
  });
</code></pre>
</div>
<p><strong>Note</strong>: The&nbsp;<em>await</em>&nbsp;keyword can&nbsp;<strong>only</strong>&nbsp;be used inside an&nbsp;<strong>async function</strong>. Using&nbsp;<em>await</em>&nbsp;keyword in any other function which is not an&nbsp;<strong>async function</strong>&nbsp;will throw an error. The&nbsp;<em>await</em>&nbsp;keyword&nbsp;<strong>awaits</strong>&nbsp;the right-hand side expression (presumably a&nbsp;<strong>Promise</strong>) to return before executing the next line of code.</p>
<div class="highlight">
<pre class="highlight javascript"><code class='language-javascript'>const giveMeOne = async () =&gt; 1;

function getOne() {
  try {
    const num = await giveMeOne();
    console.log(num);
  } catch (e) {
    console.log(e);
  }
}

//Throws a Compile-Time Error = Uncaught SyntaxError: await is only valid in an async function

async function getTwo() {
  try {
    const num1 = await giveMeOne(); //finishes this async operation first before going to
    const num2 = await giveMeOne(); //this line
    return num1 + num2;
  } catch (e) {
    console.log(e);
  }
}

await getTwo(); // returns 2</code></pre>
</div>`,categories:[{name:"Code",id:2}],id:51},{question:"What's the difference between Spread operator and Rest operator?",answer:`<p>The&nbsp;<strong>Spread operator</strong>&nbsp;and&nbsp;<strong>Rest paremeters</strong>&nbsp;have the same operator&nbsp;<code class='language-javascript'>...</code>&nbsp;the difference between is that the&nbsp;<strong>Spread operator</strong>&nbsp;we&nbsp;<strong>give</strong>&nbsp;or&nbsp;<strong>spread</strong>&nbsp;individual data of an array to another data while the&nbsp;<strong>Rest parameters</strong>&nbsp;is used in a function or an array to&nbsp;<strong>get</strong>&nbsp;all the arguments or values and put them in an array or&nbsp;<strong>extract</strong>&nbsp;some pieces of them.</p>
<div class="highlight">
<pre class="highlight javascript"><code class='language-javascript'>function add(a, b) {
  return a + b;
};

const nums = [5, 6];
const sum = add(...nums);
console.log(sum);

</code></pre>
</div>
<p>In this example, we're using the&nbsp;<strong>Spread Operator</strong>&nbsp;when we call the&nbsp;<code class='language-javascript'>add</code>&nbsp;function we are&nbsp;<strong>spreading</strong>&nbsp;the&nbsp;<code class='language-javascript'>nums</code>&nbsp;array. So the value of parameter&nbsp;<code class='language-javascript'>a</code>&nbsp;will be&nbsp;<strong>5</strong>&nbsp;and the value of&nbsp;<code class='language-javascript'>b</code>&nbsp;will be&nbsp;<strong>6</strong>. So the sum will be&nbsp;<strong>11</strong>.</p>
<div class="highlight">
<pre class="highlight javascript"><code class='language-javascript'>function add(...rest) {
  return rest.reduce((total,current) =&gt; total + current);
};

console.log(add(1, 2)); // logs 3
console.log(add(1, 2, 3, 4, 5)); // logs 15
</code></pre>
</div>
<p>In this example, we have a function&nbsp;<code class='language-javascript'>add</code>&nbsp;that accepts any number of arguments and adds them all and return the total.</p>
<div class="highlight">
<pre class="highlight javascript"><code class='language-javascript'>const [first, ...others] = [1, 2, 3, 4, 5];
console.log(first); //logs 1
console.log(others); //logs [2,3,4,5]
</code></pre>
</div>
<p>In this another example, we are using the&nbsp;<strong>Rest operator</strong>&nbsp;to extract all the remaining array values and put them in array&nbsp;<code class='language-javascript'>others</code>&nbsp;except the first item.</p>`,categories:[{name:"Code",id:2}],id:52},{question:"What are Default Parameters?",answer:`<p><strong>Default Parameters</strong>&nbsp;is a new way of defining default variables in&nbsp;<strong>JavaScript</strong>&nbsp;it is available in the&nbsp;<strong>ES6</strong>&nbsp;or&nbsp;<strong>ECMAScript 2015</strong>&nbsp;Version.</p>
<div class="highlight">
<pre class="highlight javascript"><code class='language-javascript'>//ES5 Version
function add(a,b){
  a = a || 0;
  b = b || 0;
  return a + b;
}

//ES6 Version
function add(a = 0, b = 0){
  return a + b;
}
//If we don't pass any argument for 'a' or 'b' then 
// it's gonna use the "default parameter" value which is 0
add(1); // returns 1 
</code></pre>
</div>
<p>We can also use&nbsp;<strong>Destructuring</strong>&nbsp;in&nbsp;<strong>Default Paremeters</strong>.</p>
<div class="highlight">
<pre class="highlight javascript"><code class='language-javascript'>function getFirst([first, ...rest] = [0, 1]) {
  return first;
}

getFirst();  // returns 0
getFirst([10,20,30]);  // returns 10

function getArr({ nums } = { nums: [1, 2, 3, 4] }){
    return nums;
}

getArr(); // returns [1, 2, 3, 4]
getArr({nums:[5,4,3,2,1]}); // returns [5,4,3,2,1]
</code></pre>
</div>
<p>We can also use the parameters defined first to the parameters defined after them.</p>
<div class="highlight">
<pre class="highlight javascript"><code class='language-javascript'>function doSomethingWithValue(value = "Hello World", callback = () =&gt; { console.log(value) }) {
  callback();
}
doSomethingWithValue(); //logs "Hello World"</code></pre>
</div>`,categories:[{name:"Code",id:2}],id:53},{question:"What are Wrapper Objects?",answer:`<p><strong>Primitive Values</strong>&nbsp;like&nbsp;<code class='language-javascript'>string</code>,<code class='language-javascript'>number</code>&nbsp;and&nbsp;<code class='language-javascript'>boolean</code>&nbsp;with the exception of&nbsp;<code class='language-javascript'>null</code>&nbsp;and&nbsp;<code class='language-javascript'>undefined</code>&nbsp;have properties and methods even though they are not&nbsp;<code class='language-javascript'>objects</code>.</p>
<div class="highlight">
<pre class="highlight javascript"><code class='language-javascript'>let name = "marko";

console.log(typeof name); // logs  "string"
console.log(name.toUpperCase()); // logs  "MARKO"
</code></pre>
</div>
<p><code class='language-javascript'>name</code>&nbsp;is a&nbsp;<code class='language-javascript'>primitive string</code>&nbsp;value that has no properties and methods but in this example we are calling a&nbsp;<code class='language-javascript'>toUpperCase()</code>&nbsp;method which does not throw an error but returns&nbsp;<code class='language-javascript'>MARKO</code>.</p>
<p>The reason for this is that the&nbsp;<code class='language-javascript'>primitive</code>&nbsp;value is temporarily converted or&nbsp;<em>coerce</em>&nbsp;to an&nbsp;<code class='language-javascript'>object</code>&nbsp;so the&nbsp;<code class='language-javascript'>name</code>&nbsp;variable behaves like an&nbsp;<code class='language-javascript'>object</code>. Every&nbsp;<code class='language-javascript'>primitive</code>&nbsp;except&nbsp;<code class='language-javascript'>null</code>&nbsp;and&nbsp;<code class='language-javascript'>undefined</code>&nbsp;have&nbsp;<strong>Wrapper Objects</strong>. The Wrapper Objects are&nbsp;<code class='language-javascript'>String</code>,<code class='language-javascript'>Number</code>,<code class='language-javascript'>Boolean</code>,<code class='language-javascript'>Symbol</code>&nbsp;and&nbsp;<code class='language-javascript'>BigInt</code>. In this case, the&nbsp;<code class='language-javascript'>name.toUpperCase()</code>&nbsp;invocation, behind the scenes it looks like this.</p>
<div class="highlight">
<pre class="highlight javascript"><code class='language-javascript'>
console.log(new String(name).toUpperCase()); // logs  "MARKO"

</code></pre>
</div>
<p>The newly created object is immediately discarded after we finished accessing a property or calling a method.</p>`,categories:[{name:"Code",id:2}],id:54},{question:"What is the difference between Implicit and Explicit Coercion?",answer:`<p><strong>Implicit</strong>&nbsp;Coercion is a way of converting values to another type without us programmer doing it directly or by hand.</p>
<p>Suppose we have an example below.</p>
<div class="highlight">
<pre class="highlight javascript"><code class='language-javascript'>console.log(1 + '6');
console.log(false + true);
console.log(6 * '2');

</code></pre>
</div>
<p>The&nbsp;<strong>first</strong>&nbsp;<code class='language-javascript'>console.log</code>&nbsp;statement logs&nbsp;<code class='language-javascript'>16</code>. In other languages this would throw a compile time error but in&nbsp;<strong>JavaScript</strong>&nbsp;the&nbsp;<code class='language-javascript'>1</code>&nbsp;is converted to a&nbsp;<code class='language-javascript'>string</code>&nbsp;then concatenated with the&nbsp;<code class='language-javascript'>+</code>&nbsp;operator. We did not do anything, yet it was converted automatically by&nbsp;<strong>JavaScript</strong>&nbsp;for us.<br />The&nbsp;<strong>second</strong>&nbsp;<code class='language-javascript'>console.log</code>&nbsp;statement logs&nbsp;<code class='language-javascript'>1</code>, it converts the&nbsp;<code class='language-javascript'>false</code>&nbsp;to a&nbsp;<code class='language-javascript'>boolean</code>&nbsp;which will result to a&nbsp;<code class='language-javascript'>0</code>&nbsp;and the&nbsp;<code class='language-javascript'>true</code>&nbsp;will be&nbsp;<code class='language-javascript'>1</code>&nbsp;hence the result is&nbsp;<code class='language-javascript'>1</code>.<br />The&nbsp;<strong>third</strong>&nbsp;<code class='language-javascript'>console.log</code>&nbsp;statement logs&nbsp;<code class='language-javascript'>12</code>, it converts the&nbsp;<code class='language-javascript'>'2'</code>&nbsp;to a&nbsp;<code class='language-javascript'>number</code>&nbsp;before multiplying&nbsp;<code class='language-javascript'>6 * 2</code>&nbsp;hence the result&nbsp;<code class='language-javascript'>12</code>.<br /><a href="https://delapouite.com/ramblings/javascript-coercion-rules.html">JavaScript Coercion Rules</a></p>
<p>While&nbsp;<strong>Explicit</strong>&nbsp;Coercion is the way of converting values to another type where we (<em>programmers</em>)&nbsp;<strong>explicitly</strong>&nbsp;do it.</p>
<div class="highlight">
<pre class="highlight javascript"><code class='language-javascript'>console.log(1 + parseInt('6'));
</code></pre>
</div>
<p>In this example, we use the&nbsp;<code class='language-javascript'>parseInt</code>&nbsp;function to convert the&nbsp;<code class='language-javascript'>'6'</code>&nbsp;to a&nbsp;<code class='language-javascript'>number</code>&nbsp;then adding the&nbsp;<code class='language-javascript'>1</code>&nbsp;and&nbsp;<code class='language-javascript'>6</code>&nbsp;using the&nbsp;<code class='language-javascript'>+</code>&nbsp;operator.</p>`,categories:[{name:"Code",id:2}],id:55},{question:"What is NaN? and How to check if a value is NaN?",answer:`<p><code class='language-javascript'>NaN</code>&nbsp;means&nbsp;<strong>"Not A Number"</strong>&nbsp;is a value in&nbsp;<strong>JavaScript</strong>&nbsp;that is a result in converting or performing an operation to a number to non-number value hence results to&nbsp;<code class='language-javascript'>NaN</code>.</p>
<div class="highlight">
<pre class="highlight javascript"><code class='language-javascript'>let a;

console.log(parseInt('abc'));
console.log(parseInt(null));
console.log(parseInt(undefined));
console.log(parseInt(++a));
console.log(parseInt({} * 10));
console.log(parseInt('abc' - 2));
console.log(parseInt(0 / 0));
console.log(parseInt('10a' * 10));

</code></pre>
</div>
<p><strong>JavaScript</strong>&nbsp;has a built-in method&nbsp;<code class='language-javascript'>isNaN</code>&nbsp;that tests if value is&nbsp;<code class='language-javascript'>isNaN</code>&nbsp;value. But this function has a weird behaviour.</p>
<div class="highlight">
<pre class="highlight javascript"><code class='language-javascript'>console.log(isNaN()); //logs true
console.log(isNaN(undefined)); //logs true
console.log(isNaN({})); //logs true
console.log(isNaN(String('a'))); //logs true
console.log(isNaN(() =&gt; { })); //logs true
</code></pre>
</div>
<p>All these&nbsp;<code class='language-javascript'>console.log</code>&nbsp;statements return&nbsp;<code class='language-javascript'>true</code>&nbsp;even though those values we pass are not&nbsp;<code class='language-javascript'>NaN</code>.</p>
<p>In&nbsp;<strong>ES6</strong>&nbsp;or&nbsp;<strong>ECMAScript 2015</strong>, it is recommended that we use&nbsp;<code class='language-javascript'>Number.isNaN</code>&nbsp;method because it really checks the value if it really is&nbsp;<code class='language-javascript'>NaN</code>&nbsp;or we can make our own helper function that check for this problem because in&nbsp;<strong>JavaScript</strong>&nbsp;<code class='language-javascript'>NaN</code>&nbsp;is the only value that is not equal to itself.</p>
<div class="highlight">
<pre class="highlight javascript"><code class='language-javascript'>function checkIfNaN(value) {
  return value !== value;
}</code></pre>
</div>`,categories:[{name:"Code",id:2}],id:56},{question:"How to check if a value is an Array?",answer:`<p>We can check if a value is an&nbsp;<strong>Array</strong>&nbsp;by using the&nbsp;<code class='language-javascript'>Array.isArray</code>&nbsp;method available from the&nbsp;<strong>Array</strong>&nbsp;global object. It returns true when the parameter pass to it is an&nbsp;<strong>Array</strong>&nbsp;otherwise false.</p>
<div class="highlight">
<pre class="highlight javascript"><code class='language-javascript'>console.log(Array.isArray(5));  //logs false
console.log(Array.isArray("")); //logs false
console.log(Array.isArray()); //logs false
console.log(Array.isArray(null)); //logs false
console.log(Array.isArray({ length: 5 })); //logs false

console.log(Array.isArray([])); //logs true
</code></pre>
</div>
<p>If your environment does not support this method you can use the polyfill implementation.</p>
<div class="highlight">
<pre class="highlight javascript"><code class='language-javascript'>   function isArray(value){
     return Object.prototype.toString.call(value) === "[object Array]"
   }</code></pre>
</div>`,categories:[{name:"Code",id:2}],id:57},{question:"How to check if a number is even without using the % or modulo operator?",answer:`<p>We can use the&nbsp;<strong>bitwise AND</strong><code class='language-javascript'>&amp;</code>&nbsp;operator for this problem. The&nbsp;<code class='language-javascript'>&amp;</code>&nbsp;operates on its operand and treats them as binary values and performs the&nbsp;<strong>AND</strong>&nbsp;operation.</p>
<div class="highlight">
<pre class="highlight javascript"><code class='language-javascript'>function isEven(num) {
  if (num &amp; 1) {
    return false;
  } else {
    return true;
  }
};
</code></pre>
</div>
<p><code class='language-javascript'>0</code>&nbsp;in binary is&nbsp;<strong>000</strong>.<br /><code class='language-javascript'>1</code>&nbsp;in binary is&nbsp;<strong>001</strong>.<br /><code class='language-javascript'>2</code>&nbsp;in binary is&nbsp;<strong>010</strong>.<br /><code class='language-javascript'>3</code>&nbsp;in binary is&nbsp;<strong>011</strong>.<br /><code class='language-javascript'>4</code>&nbsp;in binary is&nbsp;<strong>100</strong>.<br /><code class='language-javascript'>5</code>&nbsp;in binary is&nbsp;<strong>101</strong>.<br /><code class='language-javascript'>6</code>&nbsp;in binary is&nbsp;<strong>110</strong>.<br /><code class='language-javascript'>7</code>&nbsp;in binary is&nbsp;<strong>111</strong>.<br />and so on...</p>
<div class="table-wrapper-paragraph">
<table>
<thead>
<tr>
<th><code class='language-javascript'>a</code></th>
<th><code class='language-javascript'>b</code></th>
<th><code class='language-javascript'>a &amp; b</code></th>
</tr>
</thead>
<tbody>
<tr>
<td>0</td>
<td>0</td>
<td>0</td>
</tr>
<tr>
<td>0</td>
<td>1</td>
<td>0</td>
</tr>
<tr>
<td>1</td>
<td>0</td>
<td>0</td>
</tr>
<tr>
<td>1</td>
<td>1</td>
<td>1</td>
</tr>
</tbody>
</table>
</div>
<p>So when we&nbsp;<code class='language-javascript'>console.log</code>&nbsp;this expression&nbsp;<code class='language-javascript'>5 &amp; 1</code>&nbsp;it returns&nbsp;<code class='language-javascript'>1</code>. Ok, first the&nbsp;<code class='language-javascript'>&amp;</code>&nbsp;operator converts both numbers to binary so&nbsp;<code class='language-javascript'>5</code>&nbsp;turns to&nbsp;<strong>101</strong>&nbsp;and&nbsp;<code class='language-javascript'>1</code>&nbsp;turns to&nbsp;<strong>001</strong>.<br />Then it compares every bit&nbsp;<strong>(0's and 1's)</strong>&nbsp;using the bitwise&nbsp;<strong>AND</strong>&nbsp;operator.&nbsp;<strong>101</strong>&nbsp;<code class='language-javascript'>&amp;</code>&nbsp;<strong>001</strong>. As we can see from the table the result can be only&nbsp;<code class='language-javascript'>1</code>&nbsp;if&nbsp;<code class='language-javascript'>a</code>&nbsp;<strong>AND</strong>&nbsp;<code class='language-javascript'>b</code>&nbsp;are&nbsp;<code class='language-javascript'>1</code>.</p>
<div class="table-wrapper-paragraph">
<table>
<thead>
<tr>
<th><code class='language-javascript'>101 &amp; 001</code></th>
</tr>
</thead>
<tbody>
<tr>
<td>101</td>
</tr>
<tr>
<td>001</td>
</tr>
<tr>
<td><strong>001</strong></td>
</tr>
</tbody>
</table>
</div>
<ul>
<li>So first we compare the left most bit&nbsp;<code class='language-javascript'>1</code><code class='language-javascript'>&amp;</code><code class='language-javascript'>0</code>&nbsp;the result should be&nbsp;<code class='language-javascript'>0</code>.</li>
<li>Then we compare the middle bit&nbsp;<code class='language-javascript'>0</code><code class='language-javascript'>&amp;</code><code class='language-javascript'>0</code>&nbsp;the result should be&nbsp;<code class='language-javascript'>0</code>.</li>
<li>Then we compare the last bit&nbsp;<code class='language-javascript'>1</code><code class='language-javascript'>&amp;</code><code class='language-javascript'>1</code>&nbsp;the result should be&nbsp;<code class='language-javascript'>1</code>.</li>
<li>Then the binary result&nbsp;<code class='language-javascript'>001</code>&nbsp;will be converted to a decimal number which will be&nbsp;<code class='language-javascript'>1</code>.</li>
</ul>
<p>If we&nbsp;<code class='language-javascript'>console.log</code>&nbsp;this expression&nbsp;<code class='language-javascript'>4 &amp; 1</code>&nbsp;it will return&nbsp;<code class='language-javascript'>0</code>. Knowing the last bit of&nbsp;<code class='language-javascript'>4</code>&nbsp;is&nbsp;<code class='language-javascript'>0</code>&nbsp;and&nbsp;<code class='language-javascript'>0 &amp; 1</code>&nbsp;will be&nbsp;<code class='language-javascript'>0</code>. If you have a hard time understand this we could use a&nbsp;<strong>recursive</strong>&nbsp;function to solve this problem.</p>
<div class="highlight">
<pre class="highlight javascript"><code class='language-javascript'>function isEven(num) {
  if (num &lt; 0 || num === 1) return false;
  if (num == 0) return true;
  return isEven(num - 2);
}</code></pre>
</div>`,categories:[{name:"Code",id:2}],id:58},{question:"How to check if a certain property exists in an object?",answer:`<p>There are three possible ways to check if a property exists in an object.</p>
<p>First , using the&nbsp;<code class='language-javascript'>in</code>&nbsp;operator. The syntax for using the&nbsp;<code class='language-javascript'>in</code>&nbsp;operator is like this&nbsp;<code class='language-javascript'>propertyname in object</code>. It returns&nbsp;<code class='language-javascript'>true</code>&nbsp;if the property exists otherwise it returns&nbsp;<code class='language-javascript'>false</code>.</p>
<div class="highlight">
<pre class="highlight javascript"><code class='language-javascript'>const o = { 
  "prop" : "bwahahah",
  "prop2" : "hweasa"
};

console.log("prop" in o); //This logs true indicating the property "prop" is in "o" object
console.log("prop1" in o); //This logs false indicating the property "prop" is not in  "o" object
</code></pre>
</div>
<p>Second, using the&nbsp;<code class='language-javascript'>hasOwnProperty</code>&nbsp;method in objects. This method is available on all objects in JavaScript. It returns&nbsp;<code class='language-javascript'>true</code>&nbsp;if the property exists otherwise it returns&nbsp;<code class='language-javascript'>false</code>.</p>
<div class="highlight">
<pre class="highlight javascript"><code class='language-javascript'>//Still using the o object in the first example.
console.log(o.hasOwnProperty("prop2")); // This logs true
console.log(o.hasOwnProperty("prop1")); // This logs false
</code></pre>
</div>
<p>Third, using the bracket notation&nbsp;<code class='language-javascript'>obj["prop"]</code>. If the property exists it returns the value of that property otherwise this will return&nbsp;<code class='language-javascript'>undefined</code>.</p>
<div class="highlight">
<pre class="highlight javascript"><code class='language-javascript'>//Still using the o object in the first example.
console.log(o["prop"]); // This logs "bwahahah"
console.log(o["prop1"]); // This logs undefined</code></pre>
</div>`,categories:[{name:"Code",id:2}],id:59},{question:"What is AJAX?",answer:`<p><strong>AJAX</strong>&nbsp;stands for&nbsp;<strong>Asynchronous JavaScript and XML</strong>. It is a group of related technologies used to display data asynchronously. What this means is that we can send data to the server and get data from the server without reloading the web page.</p>
<p>Technologies use for&nbsp;<strong>AJAX</strong>.</p>
<ul>
<li><strong>HTML</strong>&nbsp;- web page structure</li>
<li><strong>CSS</strong>&nbsp;- the styling for the webpage</li>
<li><strong>JavaScript</strong>&nbsp;- the behaviour of the webpage and updates to the&nbsp;<strong>DOM</strong></li>
<li><strong>XMLHttpRequest API</strong>&nbsp;- used to send and retrieve data from the server</li>
<li><strong>PHP,Python,Nodejs</strong>&nbsp;- Some Server-Side language</li>
</ul>`,categories:[{name:"Code",id:2}],id:60},{question:"What are the ways of making objects in JavaScript?",answer:`<p>Using&nbsp;<strong>Object Literal</strong>.</p>
<div class="highlight">
<pre class="highlight javascript"><code class='language-javascript'>  const o = {
   name: "Mark",
   greeting() {
      return \`Hi, I'm \${this.name}\`;
   }
  };

  o.greeting(); //returns "Hi, I'm Mark"
</code></pre>
</div>
<p>Using&nbsp;<strong>Constructor Functions</strong>.</p>
<div class="highlight">
<pre class="highlight javascript"><code class='language-javascript'>function Person(name) {
   this.name = name;
}

Person.prototype.greeting = function () {
   return \`Hi, I'm \${this.name}\`;
}

const mark = new Person("Mark");

mark.greeting(); //returns "Hi, I'm Mark"
</code></pre>
</div>
<p>Using&nbsp;<strong>Object.create</strong>&nbsp;method.</p>
<div class="highlight">
<pre class="highlight javascript"><code class='language-javascript'>const n = {
   greeting() {
      return \`Hi, I'm \${this.name}\`;
   }
};

const o = Object.create(n); // sets the prototype of "o" to be "n"

o.name = "Mark";

console.log(o.greeting()); // logs "Hi, I'm Mark"</code></pre>
</div>`,categories:[{name:"Code",id:2}],id:61},{question:"What's the difference between Object.seal and Object.freeze methods?",answer:"<p>The difference between these two methods is that when we use the&nbsp;<code class='language-javascript'>Object.freeze</code>&nbsp;method to an object, that object's properties are immutable meaning we can't change or edit the values of those properties. While in the&nbsp;<code class='language-javascript'>Object.seal</code>&nbsp;method we can change those existing properties.</p>",categories:[{name:"Code",id:2}],id:62},{question:"What's the difference between the in operator and the hasOwnProperty method in objects?",answer:`<p>As you know both of these features check if a property exists in an object. It will return&nbsp;<code class='language-javascript'>true</code>false. The difference between them is that the&nbsp;<code class='language-javascript'>in</code>&nbsp;operator also checks the objects'&nbsp;<strong>Prototype Chain</strong>&nbsp;if the property was not found in the current object while the&nbsp;<code class='language-javascript'>hasOwnProperty</code>&nbsp;method just checks if the property exists in the current object ignoring the&nbsp;<strong>Prototype Chain</strong>.</p>
<div class="highlight">
<pre class="highlight javascript"><code class='language-javascript'>// We'll still use the object in the previous question.
console.log("prop" in o); // This logs true;
console.log("toString" in o); // This logs true, the toString method is available in this object's prototype which is the Object.prototype


console.log(o.hasOwnProperty("prop")); // This logs true
console.log(o.hasOwnProperty("toString")); // This logs false, does not</code></pre>
</div>`,categories:[{name:"Code",id:2}],id:63},{question:"What are the ways to deal with Asynchronous Code in JavasScript?",answer:`<ul>
<li>Callbacks</li>
<li>Promises</li>
<li>async/await</li>
<li>Libraries like&nbsp;async.js,&nbsp;bluebird,&nbsp;q,&nbsp;co</li>
</ul>`,categories:[{name:"Code",id:2}],id:64},{question:"What's the difference between a function expression and function declaration?",answer:`<p>Suppose we have an example below.</p>
<div class="highlight">
<pre class="highlight javascript"><code class='language-javascript'>hoistedFunc();
notHoistedFunc();

function hoistedFunc(){
  console.log("I am hoisted");
}

var notHoistedFunc = function(){
  console.log("I will not be hoisted!");
}
</code></pre>
</div>
<p>The&nbsp;<code class='language-javascript'>notHoistedFunc</code>&nbsp;call throws an error while the&nbsp;<code class='language-javascript'>hoistedFunc</code>&nbsp;call does not because the&nbsp;<code class='language-javascript'>hoistedFunc</code>&nbsp;is&nbsp;<em>hoisted</em>&nbsp;while the&nbsp;<code class='language-javascript'>notHoistedFunc</code> is not.</p>`,categories:[{name:"Code",id:2}],id:65},{question:"How many ways can a function be invoked?",answer:`<p>There are 4 ways that a function can be&nbsp;<em>invoked</em>&nbsp;in&nbsp;<strong>JavaScript</strong>. The&nbsp;<strong>invocation</strong>&nbsp;determines the value of&nbsp;<code class='language-javascript'>this</code>&nbsp;or the "owner" object of that function.</p>
<ul>
<li><strong>Invocation as a function</strong>&nbsp;- If a function isn't invoked as a method, as a constructor or with the&nbsp;<code class='language-javascript'>apply</code>,&nbsp;<code class='language-javascript'>call</code>&nbsp;methods then it is&nbsp;<strong>invoked as a function</strong>. The "owner" object of this function will be the&nbsp;<code class='language-javascript'>window</code>&nbsp;object.</li>
</ul>
<div class="highlight">
<pre class="highlight javascript"><code class='language-javascript'>  //Global Scope

  function add(a,b){
    console.log(this);
    return a + b;
  }  

  add(1,5); // logs the "window" object and returns 6

  const o = {
    method(callback){
      callback();
    }
  }

  o.method(function (){
      console.log(this); // logs the "window" object
  });
</code></pre>
</div>
<ul>
<li><strong>Invocation as a method</strong>&nbsp;- If a property of an object has a value of a function we call it a&nbsp;<strong>method</strong>. When that&nbsp;<strong>method</strong>&nbsp;is&nbsp;<em>invoked</em>&nbsp;the&nbsp;<code class='language-javascript'>this</code>&nbsp;value of that method will be that object.</li>
</ul>
<div class="highlight">
<pre class="highlight javascript"><code class='language-javascript'>   const details = {
     name : "Marko",
     getName(){
       return this.name;
     }
   }

   details.getName(); // returns Marko
   // the "this" value inside "getName" method will be the "details" object 
</code></pre>
</div>
<ul>
<li><strong>Invocation as a constructor</strong>&nbsp;- If a function was&nbsp;<em>invoked</em>&nbsp;with a&nbsp;<code class='language-javascript'>new</code>&nbsp;keyword before it then it's called a&nbsp;<code class='language-javascript'>function constructor</code>. An empty object will be created and&nbsp;<code class='language-javascript'>this</code>&nbsp;will point to that object.</li>
</ul>
<div class="highlight">
<pre class="highlight javascript"><code class='language-javascript'>function Employee(name, position, yearHired) {
  // creates an empty object {}
  // then assigns the empty object to the "this" keyword
  // this = {};
  this.name = name;
  this.position = position;
  this.yearHired = yearHired;
  // inherits from Employee.prototype
  // returns the "this" value implicitly if no 
  // explicit return statement is specified
};

const emp = new Employee("Marko Polo", "Software Developer", 2017);

</code></pre>
</div>
<ul>
<li><strong>Invocation with the&nbsp;<code class='language-javascript'>apply</code>&nbsp;and&nbsp;<code class='language-javascript'>call</code>&nbsp;methods</strong>&nbsp;- If we want to&nbsp;<em>explicitly</em>&nbsp;specify the&nbsp;<code class='language-javascript'>this</code>&nbsp;value or the "owner" object of a function we can use these methods. These methods are available for all functions.</li>
</ul>
<div class="highlight">
<pre class="highlight javascript"><code class='language-javascript'>const obj1 = {
 result:0
};

const obj2 = {
 result:0
};


function reduceAdd(){
   let result = 0;
   for(let i = 0, len = arguments.length; i &lt; len; i++){
     result += arguments[i];
   }
   this.result = result;
}


reduceAdd.apply(obj1, [1, 2, 3, 4, 5]);  //the "this" object inside the "reduceAdd" function will be "obj1"
reduceAdd.call(obj2, 1, 2, 3, 4, 5); //the "this" object inside the "reduceAdd" function will be "obj2"</code></pre>
</div>`,categories:[{name:"Code",id:2}],id:66},{question:"What is memoization and what's the use it?",answer:"<p><em>memoization</em>&nbsp;is a process of building a function that is capable of&nbsp;<strong>remembering</strong>&nbsp;it's previously computed results or values.<br />The use of making a&nbsp;<em>memoization</em>&nbsp;function is that we avoid the computation of that function if it was already performed in the last calculations with the same arguments. This saves time but has a downside that we will consume more memory for saving the previous results.</p>",categories:[{name:"Code",id:2}],id:67},{question:"Implement a memoization helper function.",answer:`<div class="highlight">
<pre class="highlight javascript"><code class='language-javascript'>function memoize(fn) {
  const cache = {};
  return function (param) {
    if (cache[param]) {
      console.log('cached');
      return cache[param];
    } else {
      let result = fn(param);
      cache[param] = result;
      console.log(\`not cached\`);
      return result;
    }
  }
}

const toUpper = (str ="")=&gt; str.toUpperCase();

const toUpperMemoized = memoize(toUpper);

toUpperMemoized("abcdef");
toUpperMemoized("abcdef");
</code></pre>
</div>
<p>This&nbsp;<em>memoize</em>&nbsp;helper function only works on a function that accepts one&nbsp;<em>argument</em>. We need to make a&nbsp;<em>memoize</em>&nbsp;helper function that accepts multiple&nbsp;<em>arguments</em>.</p>
<div class="highlight">
<pre class="highlight javascript"><code class='language-javascript'>const slice = Array.prototype.slice;
function memoize(fn) {
  const cache = {};
  return (...args) =&gt; {
    const params = slice.call(args);
    console.log(params);
    if (cache[params]) {
      console.log('cached');
      return cache[params];
    } else {
      let result = fn(...args);
      cache[params] = result;
      console.log(\`not cached\`);
      return result;
    }
  }
}
const makeFullName = (fName, lName) =&gt; \`\${fName} \${lName}\`;
const reduceAdd = (numbers, startingValue = 0) =&gt; numbers.reduce((total, cur) =&gt; total + cur, startingValue);

const memoizedMakeFullName = memoize(makeFullName);
const memoizedReduceAdd = memoize(reduceAdd);

memoizedMakeFullName("Marko", "Polo");
memoizedMakeFullName("Marko", "Polo");

memoizedReduceAdd([1, 2, 3, 4, 5], 5);
memoizedReduceAdd([1, 2, 3, 4, 5], 5);
</code></pre>
</div>`,categories:[{name:"Code",id:2}],id:68},{question:"Why does typeof null return object? How to check if a value is null?",answer:`<p><code class='language-javascript'>typeof null == 'object'</code>&nbsp;will always return&nbsp;<code class='language-javascript'>true</code>&nbsp;because this was the implementation of&nbsp;<code class='language-javascript'>null</code>&nbsp;since the birth of&nbsp;<strong>JavaScript</strong>. A fix was proposed to change&nbsp;<code class='language-javascript'>typeof null == 'object'</code>&nbsp;to&nbsp;<code class='language-javascript'>typeof null == 'null'&nbsp;</code>but was&nbsp;rejected&nbsp;because it will lead to more bugs.</p>
<p>We can use the&nbsp;<code class='language-javascript'>===</code>&nbsp;or&nbsp;<strong>strict equality</strong>&nbsp;operator to check if a value is&nbsp;<code class='language-javascript'>null</code>.</p>
<div class="highlight">
<pre class="highlight javascript"><code class='language-javascript'>  function isNull(value){
    return value === null;
  }</code></pre>
</div>`,categories:[{name:"Code",id:2}],id:69},{question:"What does the new keyword do?",answer:`<p>The&nbsp;<code class='language-javascript'>new</code>&nbsp;keyword is used with&nbsp;<em>constructor</em>&nbsp;functions to make objects<br />in&nbsp;<strong>JavaScript</strong>.</p>
<p>Suppose we have an example code below.</p>
<div class="highlight">
<pre class="highlight javascript"><code class='language-javascript'>function Employee(name, position, yearHired) {
  this.name = name;
  this.position = position;
  this.yearHired = yearHired;
};

const emp = new Employee("Marko Polo", "Software Developer", 2017);

</code></pre>
</div>
<p>The&nbsp;<code class='language-javascript'>new</code>&nbsp;keyword does 4 things.</p>
<ul>
<li>Creates an empty object.</li>
<li>Assigns that empty object to the&nbsp;<code class='language-javascript'>this</code>&nbsp;value.</li>
<li>The function will&nbsp;<em>inherit</em>&nbsp;from&nbsp;<strong>functionName.prototype</strong>.</li>
<li>Returns the&nbsp;<code class='language-javascript'>this</code>&nbsp;if no Explicit&nbsp;<code class='language-javascript'>return</code>&nbsp;statement is used.</li>
</ul>
<p>In the above image, it will first create an empty object&nbsp;<code class='language-javascript'>{}</code>&nbsp;then<br />it will the&nbsp;<code class='language-javascript'>this</code>&nbsp;value to that empty object&nbsp;<code class='language-javascript'>this = {}</code>&nbsp;and add properties to that&nbsp;<code class='language-javascript'>this</code>&nbsp;object. Because we don't have a explicit&nbsp;<code class='language-javascript'>return</code>&nbsp;statement it automatically returns the&nbsp;<code class='language-javascript'>this</code>&nbsp;for us.</p>`,categories:[{name:"Code",id:2}],id:70}],T=`pre code.hljs{display:block;overflow-x:auto;padding:1em}code.hljs{padding:3px 5px}.hljs{background:#1e1e1e;color:#dcdcdc}.hljs-keyword,.hljs-literal,.hljs-name,.hljs-symbol{color:#569cd6}.hljs-link{color:#569cd6;text-decoration:underline}.hljs-built_in,.hljs-type{color:#4ec9b0}.hljs-class,.hljs-number{color:#b8d7a3}.hljs-meta .hljs-string,.hljs-string{color:#d69d85}.hljs-regexp,.hljs-template-tag{color:#9a5334}.hljs-formula,.hljs-function,.hljs-params,.hljs-subst,.hljs-title{color:#dcdcdc}.hljs-comment,.hljs-quote{color:#57a64a;font-style:italic}.hljs-doctag{color:#608b4e}.hljs-meta,.hljs-meta .hljs-keyword,.hljs-tag{color:#9b9b9b}.hljs-template-variable,.hljs-variable{color:#bd63c5}.hljs-attr,.hljs-attribute{color:#9cdcfe}.hljs-section{color:gold}.hljs-emphasis{font-style:italic}.hljs-strong{font-weight:700}.hljs-bullet,.hljs-selector-attr,.hljs-selector-class,.hljs-selector-id,.hljs-selector-pseudo,.hljs-selector-tag{color:#d7ba7d}.hljs-addition{background-color:#144212;display:inline-block;width:100%}.hljs-deletion{background-color:#600;display:inline-block;width:100%}
`,N=`.answerTitle,strong{color:#ccc}.answerTitle{margin-top:5px}
`,b=r(a(n=>(g(a(T,"s_Ui0v6463x8c")),g(a(N,"s_KuLfABVmuWE")),v(m("s_3MRAYpJp7c8")),e(h,{children:[e("h1",{class:"title answerTitle",children:o(n,"title")}),e("div",{get dangerouslySetInnerHTML(){return n.data},[t]:{dangerouslySetInnerHTML:o(n,"data")}})]},"E7_0")),"s_7NtuI0jxRwk")),A=u,F=async({params:n})=>{const{slug:i}=n;for(const s of A)if(p(s.question)===i)return s.slug=i,s;return null},M=r(a(()=>{const n=u,i=f();return c(a(S,"s_ZDGR6w2uU2E")),e("main",{children:[e(y,{},"XF_0"),e("section",{children:e("div",{class:"container is-fullhd",children:e("div",{class:"columns",children:e(j,{value:i,onRejected:()=>e("div",{children:"Error"}),onResolved:s=>e(h,{children:[e("aside",{class:"column is-3 aside",children:e(I,{data:n,slug:s==null?void 0:s.slug},"XF_1")}),e("div",{class:"column is-9 answer",children:[(s==null?void 0:s.slug)&&e(b,{get data(){return s.answer},get title(){return s.question},[t]:{data:o(s,"answer"),title:o(s,"question")}},"XF_2"),!s&&e("div",{class:"boxPlaceholder",children:e("img",{src:"/old_internet.gif"})})],[t]:{children:!1}})]},"XF_3"),[t]:{value:t,onRejected:t,onResolved:t}},"XF_4")})})}),e(x,{},"XF_5")]})},"s_VkLNXphUh5s")),E=Object.freeze(Object.defineProperty({__proto__:null,onGet:F,default:M},Symbol.toStringTag,{value:"Module"})),q=r(a(()=>e("h1",{children:"!!!"}),"s_xYL1qOwPyDI")),W=()=>({title:"Javascript Interview Question"}),O=Object.freeze(Object.defineProperty({__proto__:null,default:q,head:W},Symbol.toStringTag,{value:"Module"})),P=`.answer{padding:10px 20px}
`,_=r(a(n=>(c(a(P,"s_0a6bz0MvvaU")),e(b,{get data(){return n.answer},get title(){return n.question},[t]:{data:o(n,"answer"),title:o(n,"question")}},"P4_0")),"s_h03vlLsqpoU")),H=({data:n})=>({title:`Javascript Interview Question - ${n.question}`}),U=Object.freeze(Object.defineProperty({__proto__:null,default:_,head:H},Symbol.toStringTag,{value:"Module"})),d=()=>E,z=[[/^\/$/,[d,()=>O],void 0,"/",["q-23e030ce.js","q-9e7f7ce5.js"]],[/^\/question\/([^/]+?)\/?$/,[d,()=>U],["slug"],"/question/[slug]/",["q-23e030ce.js","q-b7440f45.js"]]],D=[],R=!0,J="/",V=!0,B={routes:z,menus:D,trailingSlash:R,basePathname:J,cacheModules:V};export{J as basePathname,V as cacheModules,B as default,D as menus,z as routes,R as trailingSlash};
