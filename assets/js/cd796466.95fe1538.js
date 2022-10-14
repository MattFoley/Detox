"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[8009],{5162:(e,t,a)=>{a.d(t,{Z:()=>r});var n=a(7294),o=a(6010);const i="tabItem_Ymn6";function r(e){let{children:t,hidden:a,className:r}=e;return n.createElement("div",{role:"tabpanel",className:(0,o.Z)(i,r),hidden:a},t)}},5488:(e,t,a)=>{a.d(t,{Z:()=>m});var n=a(7462),o=a(7294),i=a(6010),r=a(2389),s=a(7392),l=a(7094),p=a(2466);const c="tabList__CuJ",u="tabItem_LNqP";function d(e){var t;const{lazy:a,block:r,defaultValue:d,values:m,groupId:h,className:k}=e,f=o.Children.map(e.children,(e=>{if((0,o.isValidElement)(e)&&"value"in e.props)return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)})),x=m??f.map((e=>{let{props:{value:t,label:a,attributes:n}}=e;return{value:t,label:a,attributes:n}})),b=(0,s.l)(x,((e,t)=>e.value===t.value));if(b.length>0)throw new Error(`Docusaurus error: Duplicate values "${b.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`);const g=null===d?d:d??(null==(t=f.find((e=>e.props.default)))?void 0:t.props.value)??f[0].props.value;if(null!==g&&!x.some((e=>e.value===g)))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${g}" but none of its children has the corresponding value. Available values are: ${x.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);const{tabGroupChoices:y,setTabGroupChoices:N}=(0,l.U)(),[v,w]=(0,o.useState)(g),D=[],{blockElementScrollPositionUntilNextRender:T}=(0,p.o5)();if(null!=h){const e=y[h];null!=e&&e!==v&&x.some((t=>t.value===e))&&w(e)}const C=e=>{const t=e.currentTarget,a=D.indexOf(t),n=x[a].value;n!==v&&(T(t),w(n),null!=h&&N(h,String(n)))},E=e=>{var t;let a=null;switch(e.key){case"ArrowRight":{const t=D.indexOf(e.currentTarget)+1;a=D[t]??D[0];break}case"ArrowLeft":{const t=D.indexOf(e.currentTarget)-1;a=D[t]??D[D.length-1];break}}null==(t=a)||t.focus()};return o.createElement("div",{className:(0,i.Z)("tabs-container",c)},o.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,i.Z)("tabs",{"tabs--block":r},k)},x.map((e=>{let{value:t,label:a,attributes:r}=e;return o.createElement("li",(0,n.Z)({role:"tab",tabIndex:v===t?0:-1,"aria-selected":v===t,key:t,ref:e=>D.push(e),onKeyDown:E,onFocus:C,onClick:C},r,{className:(0,i.Z)("tabs__item",u,null==r?void 0:r.className,{"tabs__item--active":v===t})}),a??t)}))),a?(0,o.cloneElement)(f.filter((e=>e.props.value===v))[0],{className:"margin-top--md"}):o.createElement("div",{className:"margin-top--md"},f.map(((e,t)=>(0,o.cloneElement)(e,{key:t,hidden:e.props.value!==v})))))}function m(e){const t=(0,r.Z)();return o.createElement(d,(0,n.Z)({key:String(t)},e))}},6740:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>h,contentTitle:()=>d,default:()=>x,frontMatter:()=>u,metadata:()=>m,toc:()=>k});var n=a(7462),o=a(7294),i=a(3905),r=a(5488),s=a(5162),l=a(814);const p={toc:[]};function c(e){let{components:t,...a}=e;return(0,i.kt)("wrapper",(0,n.Z)({},p,a,{components:t,mdxType:"MDXLayout"}),(0,i.kt)(o.Fragment,null,a.debug&&(0,i.kt)("div",null,(0,i.kt)("p",null,"Since this is a debug configuration, you need to have React Native packager running in parallel before you start\nDetox tests:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-bash"},"npm start\n\n> react-native start\n\n#                        #######\n#                   ################\n#                #########     #########\n#            #########             ##########\n#        #########        ######        #########\n#       ##########################################\n#      #####      #####################       #####\n#      #####          ##############          #####\n#      #####    ###       ######       ###    #####\n#      #####    #######            #######    #####\n#      #####    ###########    ###########    #####\n#      #####    ##########################    #####\n#      #####    ##########################    #####\n#      #####      ######################     ######\n#       ######        #############        #######\n#         #########        ####       #########\n#              #########          #########\n#                  ######### #########\n#                       #########\n#\n#\n#                    Welcome to Metro!\n#              Fast - Scalable - Integrated\n")))),(0,i.kt)("p",null,"Now you can run your first test:"),(0,i.kt)(l.Z,{language:"sh",mdxType:"CodeBlock"},"detox test --configuration ",a.configurationName))}c.isMDXComponent=!0;const u={},d="Your First Test",m={unversionedId:"introduction/your-first-test",id:"introduction/your-first-test",title:"Your First Test",description:"The previous articles have been addressing the environment and project setup, and now it is time for writing",source:"@site/../docs/introduction/your-first-test.mdx",sourceDirName:"introduction",slug:"/introduction/your-first-test",permalink:"/Detox/docs/next/introduction/your-first-test",draft:!1,editUrl:"https://github.com/wix/Detox/edit/master/docs/../docs/introduction/your-first-test.mdx",tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"Project Setup",permalink:"/Detox/docs/next/introduction/project-setup"},next:{title:"How to Debug",permalink:"/Detox/docs/next/introduction/debugging"}},h={},k=[{value:"Writing a test",id:"writing-a-test",level:2},{value:"1. Create a test suite",id:"1-create-a-test-suite",level:3},{value:"2. Launch the application",id:"2-launch-the-application",level:3},{value:"3. Match an element",id:"3-match-an-element",level:3},{value:"4. Perform an action",id:"4-perform-an-action",level:3},{value:"5. Make an assertion",id:"5-make-an-assertion",level:3},{value:"Running tests",id:"running-tests",level:2}],f={toc:k};function x(e){let{components:t,...a}=e;return(0,i.kt)("wrapper",(0,n.Z)({},f,a,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"your-first-test"},"Your First Test"),(0,i.kt)("p",null,"The previous articles have been addressing the environment and project setup, and now it is time for writing\nand running the tests."),(0,i.kt)("p",null,"If you are eager to check first whether your build configuration was correct, you can skip writing a test for now and try ",(0,i.kt)("a",{parentName:"p",href:"#running-tests"},"running tests")," instead, to identify potential ",(0,i.kt)("a",{parentName:"p",href:"/Detox/docs/next/troubleshooting/running-tests#no-simulators-found-ios"},"late issues")," caused by incorrect project configuration."),(0,i.kt)("h2",{id:"writing-a-test"},"Writing a test"),(0,i.kt)("p",null,"This subsection shows how to write a test which can:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("em",{parentName:"li"},"launch")," the application,"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("em",{parentName:"li"},"tap")," on a button,"),(0,i.kt)("li",{parentName:"ul"},"and ",(0,i.kt)("em",{parentName:"li"},"assert")," that some text appears as a result.")),(0,i.kt)("p",null,"Also, it will familiarize you with commonly used Detox ",(0,i.kt)("a",{parentName:"p",href:"/Detox/docs/next/api/actions"},"actions"),", ",(0,i.kt)("a",{parentName:"p",href:"/Detox/docs/next/api/expect"},"assertions")," and ",(0,i.kt)("a",{parentName:"p",href:"/Detox/docs/next/api/matchers"},"matchers")," along the way."),(0,i.kt)("h3",{id:"1-create-a-test-suite"},"1. Create a test suite"),(0,i.kt)("admonition",{title:"Note",type:"info"},(0,i.kt)("p",{parentName:"admonition"},"You can also duplicate and modify a ",(0,i.kt)("inlineCode",{parentName:"p"},"e2e/starter.test.js")," file that was generated automatically by ",(0,i.kt)("inlineCode",{parentName:"p"},"detox init")," command.")),(0,i.kt)("p",null,"Create a new test file under your ",(0,i.kt)("inlineCode",{parentName:"p"},"e2e")," folder and add a similar test suite skeleton:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-js",metastring:'title="e2e/yourTestName.test.js"',title:'"e2e/yourTestName.test.js"'},"describe('Example', () => {\n  beforeAll(async () => {});\n\n  beforeEach(async () => {});\n\n  it('should test something', async () => {});\n});\n")),(0,i.kt)("h3",{id:"2-launch-the-application"},"2. Launch the application"),(0,i.kt)("p",null,"When your test starts, the application is not running yet. You need to call ",(0,i.kt)("a",{parentName:"p",href:"/Detox/docs/next/api/device#devicelaunchappparams"},(0,i.kt)("inlineCode",{parentName:"a"},"device.launchApp()"))," at least once, e.g. in the ",(0,i.kt)("inlineCode",{parentName:"p"},"beforeAll")," hook:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-js"},"describe('Example', () => {\n  beforeAll(async () => {\n    await device.launchApp();\n  });\n\n  // \u2026\n});\n")),(0,i.kt)("p",null,"If your app supports deep links, you can configure it to ",(0,i.kt)("a",{parentName:"p",href:"/Detox/docs/next/guide/mocking-open-with-url"},"start from a specific screen"),"."),(0,i.kt)("admonition",{type:"tip"},(0,i.kt)("p",{parentName:"admonition"},"It is a good idea to start every test from a fresh state, since the preceeding ones might leave your application\nin an unpredictable state if they fail."),(0,i.kt)("p",{parentName:"admonition"},"One way to do it is to launch the app as a new instance in ",(0,i.kt)("inlineCode",{parentName:"p"},"beforeEach")," hook instead:"),(0,i.kt)("pre",{parentName:"admonition"},(0,i.kt)("code",{parentName:"pre",className:"language-js"},"beforeEach(async () => {\n  await device.launchApp({ newInstance: true });\n});\n")),(0,i.kt)("p",{parentName:"admonition"},"The other way is to ",(0,i.kt)("em",{parentName:"p"},"reload React Native")," without restarting the app. Like any live reloading, it is apt to cause glitches for more complex apps,\nbut for simpler apps it proves to be a quicker way to reset the state between the tests:"),(0,i.kt)("pre",{parentName:"admonition"},(0,i.kt)("code",{parentName:"pre",className:"language-js"},"beforeEach(async () => {\n  await device.reloadReactNative();\n});\n")),(0,i.kt)("p",{parentName:"admonition"},"So, pick your favorite one wisely, on the basis of ",(0,i.kt)("em",{parentName:"p"},"speed")," vs ",(0,i.kt)("em",{parentName:"p"},"stability")," considerations.")),(0,i.kt)("h3",{id:"3-match-an-element"},"3. Match an element"),(0,i.kt)("p",null,"The next step is to ",(0,i.kt)("a",{parentName:"p",href:"/Detox/docs/next/api/matchers"},"match")," an element you want to interact with."),(0,i.kt)("p",null,"Detox provides many options to match an element ",(0,i.kt)("a",{parentName:"p",href:"/Detox/docs/next/api/matchers#byidid"},(0,i.kt)("inlineCode",{parentName:"a"},"by.id()")),", ",(0,i.kt)("a",{parentName:"p",href:"/Detox/docs/next/api/matchers#bylabellabel"},(0,i.kt)("inlineCode",{parentName:"a"},"by.label()")),", ",(0,i.kt)("a",{parentName:"p",href:"/Detox/docs/next/api/matchers#bytexttext"},(0,i.kt)("inlineCode",{parentName:"a"},"by.text()"))," and ",(0,i.kt)("a",{parentName:"p",href:"/Detox/docs/next/api/matchers"},"more"),".\nThe most common way to match elements is either by ",(0,i.kt)("em",{parentName:"p"},"id")," or ",(0,i.kt)("em",{parentName:"p"},"text"),":"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-js"},"element(by.id('YourTestID')); // recommended\nelement(by.text('Element text'));\n")),(0,i.kt)("admonition",{title:"Best practice",type:"info"},(0,i.kt)("p",{parentName:"admonition"},"Try to use ",(0,i.kt)("a",{parentName:"p",href:"/Detox/docs/next/api/matchers#byidid"},(0,i.kt)("inlineCode",{parentName:"a"},"by.id()"))," matcher wherever possible.\n",(0,i.kt)("a",{parentName:"p",href:"/Detox/docs/next/guide/test-id"},"Explore our guide")," to learn how to work with ",(0,i.kt)("inlineCode",{parentName:"p"},"testID")," props.")),(0,i.kt)("h3",{id:"4-perform-an-action"},"4. Perform an action"),(0,i.kt)("p",null,"Detox provides many actions on elements such as ",(0,i.kt)("a",{parentName:"p",href:"/Detox/docs/next/api/actions#tappoint"},(0,i.kt)("inlineCode",{parentName:"a"},"tap()")),", ",(0,i.kt)("a",{parentName:"p",href:"/Detox/docs/next/api/actions#swipedirection-speed-normalizedoffset-normalizedstartingpointx-normalizedstartingpointy"},(0,i.kt)("inlineCode",{parentName:"a"},"swipe()")),", ",(0,i.kt)("a",{parentName:"p",href:"/Detox/docs/next/api/actions#scrolloffset-direction-startpositionx-startpositiony"},(0,i.kt)("inlineCode",{parentName:"a"},"scroll()"))," and ",(0,i.kt)("a",{parentName:"p",href:"/Detox/docs/next/api/actions#methods"},"other interactions"),"."),(0,i.kt)("p",null,"Let's tap on an element for the sake of the example:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-jsx"},"describe('Example', () => {\n  // \u2026\n\n  it('should tap on a button', async () => {\n    await element(by.id('ButtonID')).tap();\n  });\n});\n")),(0,i.kt)("admonition",{title:"Note",type:"info"},(0,i.kt)("p",{parentName:"admonition"},'You don\'t need to wait or "sleep" after interacting with an element, because Detox already does it for you.\nIt synchronises with your application and waits after each action for all the foreground activities to finish before performing any further step.'),(0,i.kt)("p",{parentName:"admonition"},"While convenient, this feature goes sideways at times, for example, when your app has looping animations causing Detox to wait forever.\nThis is why you sometimes have to tweak your app specifically for Detox tests, and ",(0,i.kt)("a",{parentName:"p",href:"/Detox/docs/next/troubleshooting/synchronization"},"there is a special guide")," for that.")),(0,i.kt)("h3",{id:"5-make-an-assertion"},"5. Make an assertion"),(0,i.kt)("p",null,"An essential step of any test is ",(0,i.kt)("em",{parentName:"p"},"making an assertion"),"."),(0,i.kt)("p",null,"Detox provides its own ",(0,i.kt)("inlineCode",{parentName:"p"},"expect")," object, so that you can expect from any element ",(0,i.kt)("a",{parentName:"p",href:"/Detox/docs/next/api/expect#toexist"},(0,i.kt)("inlineCode",{parentName:"a"},"toExist()")),", ",(0,i.kt)("a",{parentName:"p",href:"/Detox/docs/next/api/expect#tobevisible"},(0,i.kt)("inlineCode",{parentName:"a"},"toBeVisible()")),", ",(0,i.kt)("a",{parentName:"p",href:"/Detox/docs/next/api/expect#tohavetexttext"},(0,i.kt)("inlineCode",{parentName:"a"},"toHaveText()"))," and ",(0,i.kt)("a",{parentName:"p",href:"/Detox/docs/next/api/expect#methods"},"more various things"),".\nAll the assertions can be inverted with ",(0,i.kt)("a",{parentName:"p",href:"/Detox/docs/next/api/expect#not"},(0,i.kt)("inlineCode",{parentName:"a"},"not")," property"),"."),(0,i.kt)("p",null,"Let's assert that our text is shown on a screen using ",(0,i.kt)("a",{parentName:"p",href:"/Detox/docs/next/api/expect#tobevisible"},(0,i.kt)("inlineCode",{parentName:"a"},"toBeVisible()"))," function:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-jsx"},"describe('Example', () => {\n  beforeAll(async () => {\n    await device.launchApp();\n  });\n\n  beforeEach(async () => {\n    await device.reloadReactNative();\n  });\n\n  it('should tap on button by id and expect some text to be visible', async () => {\n    await element(by.id('ButtonID')).tap();\n    await expect(element(by.text('The button has been pressed'))).toBeVisible();\n  });\n});\n")),(0,i.kt)("p",null,"Note that instead of matching by text you can assert a specific text on an element with ",(0,i.kt)("a",{parentName:"p",href:"/Detox/docs/next/api/expect#tohavetexttext"},(0,i.kt)("inlineCode",{parentName:"a"},"toHaveText()")),", e.g.:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-jsx"},"await expect(element(by.id('TextAfterButtonPressed'))).toHaveText('Button pressed');\n")),(0,i.kt)("h2",{id:"running-tests"},"Running tests"),(0,i.kt)(r.Z,{groupId:"configurationName",mdxType:"Tabs"},(0,i.kt)(s.Z,{value:"ios.sim.debug",label:"iOS (Debug)",mdxType:"TabItem"},(0,i.kt)(c,{configurationName:"ios.sim.debug",debug:!0,mdxType:"RunningYourTest"})),(0,i.kt)(s.Z,{value:"ios.sim.release",label:"iOS (Release)",mdxType:"TabItem"},(0,i.kt)(c,{configurationName:"ios.sim.release",mdxType:"RunningYourTest"})),(0,i.kt)(s.Z,{value:"android.emu.debug",label:"Android (Debug)",mdxType:"TabItem"},(0,i.kt)(c,{configurationName:"android.emu.debug",debug:!0,mdxType:"RunningYourTest"})),(0,i.kt)(s.Z,{value:"android.emu.release",label:"Android (Release)",mdxType:"TabItem"},(0,i.kt)(c,{configurationName:"android.emu.release",mdxType:"RunningYourTest"}))),(0,i.kt)("p",null,"If you haven't changed the generated ",(0,i.kt)("inlineCode",{parentName:"p"},"e2e/starter.test.js"),", you are likely to see errors like this:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"}," FAIL  e2e/starter.test.js (25.916 s)\n  Example\n    \u2715 should have welcome screen (662 ms)\n    \u2715 should show hello screen after tap (236 ms)\n    \u2715 should show world screen after tap (236 ms)\n\n  \u25cf Example \u203a should have welcome screen\n\n    Test Failed: No elements found for \u201cMATCHER(id == \u201cwelcome\u201d)\u201d\n\n    HINT: To print view hierarchy on failed actions/matches, use log-level verbose or higher.\n\n       9 |\n      10 |   it('should have welcome screen', async () => {\n    > 11 |     await expect(element(by.id('welcome'))).toBeVisible();\n         |                                             ^\n      12 |   });\n      13 |\n      14 |   it('should show hello screen after tap', async () => {\n\n      at Object.toBeVisible (e2e/starter.test.js:11:45)\n\n  \u2026\n")),(0,i.kt)("p",null,"If you have created your own test, and it is failing, examine the error message, check out our ",(0,i.kt)("a",{parentName:"p",href:"/Detox/docs/next/guide/investigating-test-failure"},"Investigating Failures"),"\nand ",(0,i.kt)("a",{parentName:"p",href:"/Detox/docs/next/introduction/debugging"},"Debugging")," guides, and run your tests again after you fix the issue."))}x.isMDXComponent=!0}}]);