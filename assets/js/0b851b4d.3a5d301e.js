"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[7586],{3905:(e,t,a)=>{a.d(t,{Zo:()=>u,kt:()=>c});var n=a(7294);function o(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function i(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function l(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?i(Object(a),!0).forEach((function(t){o(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):i(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function r(e,t){if(null==e)return{};var a,n,o=function(e,t){if(null==e)return{};var a,n,o={},i=Object.keys(e);for(n=0;n<i.length;n++)a=i[n],t.indexOf(a)>=0||(o[a]=e[a]);return o}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)a=i[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(o[a]=e[a])}return o}var s=n.createContext({}),p=function(e){var t=n.useContext(s),a=t;return e&&(a="function"==typeof e?e(t):l(l({},t),e)),a},u=function(e){var t=p(e.components);return n.createElement(s.Provider,{value:t},e.children)},d="mdxType",m={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},h=n.forwardRef((function(e,t){var a=e.components,o=e.mdxType,i=e.originalType,s=e.parentName,u=r(e,["components","mdxType","originalType","parentName"]),d=p(a),h=o,c=d["".concat(s,".").concat(h)]||d[h]||m[h]||i;return a?n.createElement(c,l(l({ref:t},u),{},{components:a})):n.createElement(c,l({ref:t},u))}));function c(e,t){var a=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var i=a.length,l=new Array(i);l[0]=h;var r={};for(var s in t)hasOwnProperty.call(t,s)&&(r[s]=t[s]);r.originalType=e,r[d]="string"==typeof e?e:o,l[1]=r;for(var p=2;p<i;p++)l[p]=a[p];return n.createElement.apply(null,l)}return n.createElement.apply(null,a)}h.displayName="MDXCreateElement"},6667:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>s,contentTitle:()=>l,default:()=>d,frontMatter:()=>i,metadata:()=>r,toc:()=>p});var n=a(7462),o=(a(7294),a(3905));const i={title:"Setting Up an Android Development & Testing Environment"},l=void 0,r={unversionedId:"guide/android-dev-env",id:"guide/android-dev-env",title:"Setting Up an Android Development & Testing Environment",description:"This guide provides some core practices to follow in setting up a stable, reliable environment for running automated UI tests using Android emulators (using Detox, in particular) \u2013 be it on a personal, local computer, or a powerful CI machine.",source:"@site/../docs/guide/android-dev-env.md",sourceDirName:"guide",slug:"/guide/android-dev-env",permalink:"/Detox/docs/next/guide/android-dev-env",draft:!1,editUrl:"https://github.com/wix/Detox/edit/master/docs/../docs/guide/android-dev-env.md",tags:[],version:"current",frontMatter:{title:"Setting Up an Android Development & Testing Environment"},sidebar:"tutorialSidebar",previous:{title:"Developing Your App While Writing Tests",permalink:"/Detox/docs/next/guide/developing-while-writing-tests"},next:{title:"ProGuard configuration",permalink:"/Detox/docs/next/guide/proguard-configuration"}},s={},p=[{value:"Java Setup",id:"java-setup",level:2},{value:"Android SDK",id:"android-sdk",level:2},{value:"Android (AOSP) Emulators",id:"android-aosp-emulators",level:2},{value:"Here\u2019s how to install them using the command line",id:"heres-how-to-install-them-using-the-command-line",level:3},{value:"Installing from Android Studio",id:"installing-from-android-studio",level:3},{value:"Emulator Quick-Boot",id:"emulator-quick-boot",level:2},{value:"Setting up a quick-boot snapshot from the Emulator",id:"setting-up-a-quick-boot-snapshot-from-the-emulator",level:3},{value:"Setting up a quick-boot snapshot from command-line",id:"setting-up-a-quick-boot-snapshot-from-command-line",level:3},{value:"Test Butler Support (Optional)",id:"test-butler-support-optional",level:3},{value:"Solution 1: Prebaked Images",id:"solution-1-prebaked-images",level:4},{value:"Solution 2: Dynamic Installation",id:"solution-2-dynamic-installation",level:4},{value:"Disclaimer",id:"disclaimer",level:3},{value:"Cheatsheet",id:"cheatsheet",level:2},{value:"Locating the AVD\u2019s home directory",id:"locating-the-avds-home-directory",level:3},{value:"Booting an emulator via command-line",id:"booting-an-emulator-via-command-line",level:3},{value:"Shortcut for booting a verbose, visible emulator in a GUI supporting system",id:"shortcut-for-booting-a-verbose-visible-emulator-in-a-gui-supporting-system",level:4},{value:"Verifying the emulator\u2019s quick-boot snapshot has been saved",id:"verifying-the-emulators-quick-boot-snapshot-has-been-saved",level:3}],u={toc:p};function d(e){let{components:t,...i}=e;return(0,o.kt)("wrapper",(0,n.Z)({},u,i,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"This guide provides some core practices to follow in setting up a stable, reliable environment for running automated UI tests using Android emulators (using Detox, in particular) \u2013 be it on a personal, ",(0,o.kt)("em",{parentName:"p"},"local")," computer, or a powerful CI machine."),(0,o.kt)("p",null,"Note that running automated UI tests is ",(0,o.kt)("em",{parentName:"p"},"not the same")," as developing Android apps. Hence, you may find yourself not 100% aligned with the recommendations here, and should consider being so."),(0,o.kt)("h2",{id:"java-setup"},"Java Setup"),(0,o.kt)("p",null,"This is the most basic step in the process, as without a proper Java SDK installed, nothing Android-ish works \u2013 at least not from command-line, which is mandatory for executing ",(0,o.kt)("inlineCode",{parentName:"p"},"Detox"),"."),(0,o.kt)("p",null,(0,o.kt)("em",{parentName:"p"},"The bottom line is that ",(0,o.kt)("strong",{parentName:"em"},"Android needs Java installed"),". If you want to run with React Native 66 and Android 12 then it needs to be at least Java 11, otherwise you should have Java 8.")),(0,o.kt)("p",null,"To check for your real java-executable\u2019s version, in a command-line console, run:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"java -version\n")),(0,o.kt)("p",null,"What needs to be verified is that ",(0,o.kt)("inlineCode",{parentName:"p"},"java")," is in-path and that the output contains something like this:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},'java version "11.x.x"\n...\n')),(0,o.kt)("p",null,"or, if you have ",(0,o.kt)("a",{parentName:"p",href:"https://techoral.com/blog/openjdk-developers-guide.html"},"openjdk")," installed:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},'openjdk version "11.0.2" 2019-01-1\n...\n')),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"Namely, that the version is ",(0,o.kt)("inlineCode",{parentName:"strong"},"11.x.x")),"."),(0,o.kt)("blockquote",null,(0,o.kt)("p",{parentName:"blockquote"},"Note: Do not be confused by the Java version potentially used by your browsers, etc. For ",(0,o.kt)("inlineCode",{parentName:"p"},"Detox"),", what the command-line sees is what matters.")),(0,o.kt)("hr",null),(0,o.kt)("p",null,"If ",(0,o.kt)("inlineCode",{parentName:"p"},"java -version")," yields an error, it is likely that ",(0,o.kt)("inlineCode",{parentName:"p"},"java")," is either not in your path or not even installed at all. To try to understand which of the two is true, use ",(0,o.kt)("a",{parentName:"p",href:"https://www.java.com/en/download/help/path.xml"},"this guide"),"."),(0,o.kt)("p",null,"If otherwise the version is simply wrong, try these course of actions:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"On MacOS, in particular, Java comes from both the OS ",(0,o.kt)("em",{parentName:"li"},"and")," possibly other installers such as ",(0,o.kt)("inlineCode",{parentName:"li"},"homebrew"),". That can really get things tangled up. To mitigate:",(0,o.kt)("ul",{parentName:"li"},(0,o.kt)("li",{parentName:"ul"},"Use one of the options suggested in this ",(0,o.kt)("a",{parentName:"li",href:"https://stackoverflow.com/questions/52524112/how-do-i-install-java-on-mac-osx-allowing-version-switching/52524114#52524114"},"Stack Overflow post"),"."),(0,o.kt)("li",{parentName:"ul"},"Install OpenJDK 11 on top of the existing versions (",(0,o.kt)("a",{parentName:"li",href:"https://medium.com/notes-for-geeks/java-home-and-java-home-on-macos-f246cab643bd"},"how to check?"),"): ",(0,o.kt)("a",{parentName:"li",href:"https://techoral.com/blog/java/install-openjdk-11-on-mac.html"},"https://techoral.com/blog/java/install-openjdk-11-on-mac.html"),". Consider employing the ",(0,o.kt)("inlineCode",{parentName:"li"},"JAVA_HOME")," variable to get things to work right. ",(0,o.kt)("em",{parentName:"li"},"Note: This is more suitable if your environment is fairly clean, and does not contain versions from 3rd-party installers (e.g. ",(0,o.kt)("inlineCode",{parentName:"em"},"homebrew"),").")))),(0,o.kt)("li",{parentName:"ul"},"Use these refs, which might be useful:",(0,o.kt)("ul",{parentName:"li"},(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"https://java.com/en/download/faq/java_mac.xml#version"},"https://java.com/en/download/faq/java_mac.xml#version")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"https://www.java.com/en/download/help/version_manual.xml"},"https://www.java.com/en/download/help/version_manual.xml"))))),(0,o.kt)("h2",{id:"android-sdk"},"Android SDK"),(0,o.kt)("p",null,"If you have Android Studio installed - as most of us do, then the SDK should be available for you somewhere on your machine",(0,o.kt)("sup",null,"*"),". However, for CI agents \u2013 possibly running with no GUI, or if you simply don\u2019t want the somewhat bloated piece of software on your computer, it is possible to simply download the SDK and tool-set, purely. Both cases are covered in Google\u2019s ",(0,o.kt)("a",{parentName:"p",href:"https://developer.android.com/studio/"},"Android guide about Android Studio"),". For the pure-tools option, refer to the ",(0,o.kt)("inlineCode",{parentName:"p"},"Command line tools only")," section at the bottom."),(0,o.kt)("p",null,"For more help on setting the SDK up, ",(0,o.kt)("a",{parentName:"p",href:"https://www.androidcentral.com/installing-android-sdk-windows-mac-and-linux-tutorial"},"this guide might be helpful"),"."),(0,o.kt)("p",null,"Whatever option you choose, and whichever platform you\u2019re running on (Mac, Linux, Windows), we strongly recommend that eventually you would have 2 additional things set up:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"The path to the SDK\u2019s root directory is set into the ",(0,o.kt)("inlineCode",{parentName:"li"},"ANDROID_SDK_ROOT")," ",(0,o.kt)("a",{parentName:"li",href:"https://developer.android.com/studio/command-line/variables"},"environment variable"),"."),(0,o.kt)("li",{parentName:"ul"},"The path to the SDK\u2019s root directory is bundled into the global ",(0,o.kt)("a",{parentName:"li",href:"https://superuser.com/questions/284342/what-are-path-and-other-environment-variables-and-how-can-i-set-or-use-them"},(0,o.kt)("inlineCode",{parentName:"a"},"PATH"))," on your computer.")),(0,o.kt)("p",null,(0,o.kt)("em",{parentName:"p"},(0,o.kt)("sup",null,"*"," Inspect the content of your ",(0,o.kt)("inlineCode",{parentName:"em"},"ANDROID_SDK_ROOT")," and ",(0,o.kt)("inlineCode",{parentName:"em"},"ANDROID_HOME")," environment variables."))),(0,o.kt)("h2",{id:"android-aosp-emulators"},"Android (AOSP) Emulators"),(0,o.kt)("p",null,"Mobile-apps' automation needs an Android device to run on. If you haven\u2019t already done so, you should  ",(0,o.kt)("a",{parentName:"p",href:"https://developer.android.com/studio/run/emulator"},"set up an Emulator"),". But, wait - don\u2019t go and install the default one: read through, first."),(0,o.kt)("p",null,"We\u2019ve long proven that for automation - which requires a stable and deterministic environment, Google\u2019s emulators running with Google APIs simply don\u2019t deliver what\u2019s needed. Be it the preinstalled Google play-services - which tend to take up a lot of CPU, or even Google\u2019s ",(0,o.kt)("inlineCode",{parentName:"p"},"gboard")," Keyboard - which is full-featured but overly bloated: These encourage flakiness in tests, which we are desperate to avoid in automation."),(0,o.kt)("p",null,"Fortunately, the Android team at Google offers a pretty decent alternative: ",(0,o.kt)("strong",{parentName:"p"},"AOSP emulators")," (Android Open-Source Project). While possibly lacking some of the extended Google services, and a bit less fancy overall, ",(0,o.kt)("strong",{parentName:"p"},"we strongly recommend")," to strictly use this flavor of emulators for running automation/Detox tests. They can be installed alongside regular emulators."),(0,o.kt)("p",null,(0,o.kt)("em",{parentName:"p"},"Here\u2019s a visual comparison between the two - an SDK 28 (Android 9) AOSP emulator (left) vs. an emulator with Google APIs installed (right):")),(0,o.kt)("p",null,(0,o.kt)("img",{alt:"AOSP vs Google-API",src:a(1928).Z,width:"844",height:"747"})),(0,o.kt)("h3",{id:"heres-how-to-install-them-using-the-command-line"},"Here\u2019s how to install them using the command line"),(0,o.kt)("p",null,"While it\u2019s possible to do this using Android Studio, we\u2019ll focus on the command line, as it is also good for ",(0,o.kt)("em",{parentName:"p"},"headless")," CI machines."),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},"Locate your 'Android home' folder - typically set in the ",(0,o.kt)("inlineCode",{parentName:"p"},"ANDROID_HOME")," environment variable, or in its predecessor - ",(0,o.kt)("inlineCode",{parentName:"p"},"ANDROID_SDK_ROOT"),". If ",(0,o.kt)("inlineCode",{parentName:"p"},"ANDROID_HOME")," isn\u2019t set, either set it yourself or run the following commands after ",(0,o.kt)("inlineCode",{parentName:"p"},"cd"),"-ing into the home folder.")),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},"Preliminary: Upgrade your ",(0,o.kt)("inlineCode",{parentName:"p"},"emulator")," executable to the latest version.\n",(0,o.kt)("em",{parentName:"p"},"Note: It is OK if the emulator\u2019s version is not aligned with the SDK or platform-tools' version you currently have installed (e.g. 30.x.x vs. SDK 29)")),(0,o.kt)("pre",{parentName:"li"},(0,o.kt)("code",{parentName:"pre",className:"language-sh"},"$ANDROID_HOME/cmdline-tools/latest/bin/sdkmanager --install emulator\n")),(0,o.kt)("admonition",{parentName:"li",type:"note"},(0,o.kt)("p",{parentName:"admonition"},"In previous Android Studio versions, the SDK-Manager path was located at ",(0,o.kt)("inlineCode",{parentName:"p"},"$ANDROID_HOME/tools/bin/sdkmanager"),".\nWe highly recommend working with the latest version, however, in case you are working with an old version, and this command fails, try this path instead."),(0,o.kt)("p",{parentName:"admonition"},"The command might also fail if the command-line tools aren't installed. To install the tools using Android Studio, click ",(0,o.kt)("inlineCode",{parentName:"p"},"Tools > SDK Manager")," and select the ",(0,o.kt)("inlineCode",{parentName:"p"},"SDK Tools")," tab. Ensure that ",(0,o.kt)("inlineCode",{parentName:"p"},"Android SDK Command-line Tools (latest)")," is checked and applied."))),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},"Install an emulator image without Google APIs:"),(0,o.kt)("pre",{parentName:"li"},(0,o.kt)("code",{parentName:"pre",className:"language-shell"},'$ANDROID_HOME/cmdline-tools/latest/bin/sdkmanager "system-images;android-28;default;x86_64"\n$ANDROID_HOME/cmdline-tools/latest/bin/sdkmanager --licenses\n')),(0,o.kt)("blockquote",{parentName:"li"},(0,o.kt)("ul",{parentName:"blockquote"},(0,o.kt)("li",{parentName:"ul"},"With ",(0,o.kt)("inlineCode",{parentName:"li"},";android-28;"),", we assumed SDK 28 here, but other APIs are supported just the same."),(0,o.kt)("li",{parentName:"ul"},"The ",(0,o.kt)("inlineCode",{parentName:"li"},";default;")," part replaces ",(0,o.kt)("inlineCode",{parentName:"li"},";google_apis;"),", which is the default, and is what matters here."),(0,o.kt)("li",{parentName:"ul"},"If you are running on a M1 you must install an arm64 architecture i.e. ",(0,o.kt)("inlineCode",{parentName:"li"},"system-images;android-28;default;arm64-v8a")),(0,o.kt)("li",{parentName:"ul"},"To get a list of available images, run ",(0,o.kt)("inlineCode",{parentName:"li"},"$ANDROID_HOME/cmdline-tools/latest/bin/sdkmanager --list"))))),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},"Create an emulator (i.e. AVD - Android Virtual Device):"),(0,o.kt)("pre",{parentName:"li"},(0,o.kt)("code",{parentName:"pre",className:"language-shell"},'$ANDROID_HOME/cmdline-tools/latest/bin/avdmanager create avd -n Pixel_API_28_AOSP -d pixel --package "system-images;android-28;default;x86_64"\n')),(0,o.kt)("blockquote",{parentName:"li"},(0,o.kt)("ul",{parentName:"blockquote"},(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"Pixel_API_28_AOSP")," is just a suggestion for a name. Any name can work here, even ",(0,o.kt)("inlineCode",{parentName:"li"},"Pixel_API_28")," - but you might have to delete an existing non-AOSP emulator, first. In any case, the name used in Detox configuration (typically in ",(0,o.kt)("inlineCode",{parentName:"li"},"package.json"),") should be identical to this one."),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"-d pixel")," will install an emulator with the specs of a Pixel-1 device. Other specs can be used."),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"--package")," is the most important argument: be sure to use the same value as you did in part 2, above, with ",(0,o.kt)("inlineCode",{parentName:"li"},";default;"),".")),(0,o.kt)("p",{parentName:"blockquote"},"Run ",(0,o.kt)("inlineCode",{parentName:"p"},"avdmanager create --help")," for the full list of options."))),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},"Launch the emulator:"))),(0,o.kt)("p",null,"This isn\u2019t mandatory, of course, but it\u2019s always good to launch the emulator at least once before running automated tests. The section below will discuss optimizing emulators bootstrapping."),(0,o.kt)("p",null,"At this point, you should be able to launch the emulator from Android Studio, but that can also be done from a command line console, as explained in the ",(0,o.kt)("a",{parentName:"p",href:"#locating-the-avds-home-directory"},"cheatsheet below"),"."),(0,o.kt)("blockquote",null,(0,o.kt)("p",{parentName:"blockquote"},"See ",(0,o.kt)("a",{parentName:"p",href:"https://developer.android.com/studio/run/emulator-commandline"},"this guide")," for full details on the ",(0,o.kt)("inlineCode",{parentName:"p"},"emulator")," executable.")),(0,o.kt)("h3",{id:"installing-from-android-studio"},"Installing from Android Studio"),(0,o.kt)("p",null,"We won\u2019t go into all the details but once the proper image is installed using the ",(0,o.kt)("inlineCode",{parentName:"p"},"sdkmanager"),", the option becomes available in the AVD creation dialog  (see ",(0,o.kt)("inlineCode",{parentName:"p"},"Target")," column of the Virtual Device Configuration screen below):"),(0,o.kt)("p",null,(0,o.kt)("img",{alt:"SDK manager in AS",src:a(1943).Z,width:"1109",height:"929"})),(0,o.kt)("p",null,(0,o.kt)("img",{alt:"Install AOSP in AS",src:a(9628).Z,width:"1131",height:"791"})),(0,o.kt)("p",null,'Also, be sure to upgrade your emulator executable to the latest version: If it isn\u2019t up-to-date, you will get an "Update Available" message under the ',(0,o.kt)("em",{parentName:"p"},"status"),' column, instead of "Installed":'),(0,o.kt)("p",null,(0,o.kt)("img",{alt:"Upgrade emulator in AS",src:a(2200).Z,width:"1094",height:"834"})),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"Note:")," ",(0,o.kt)("em",{parentName:"p"},"It is OK if the emulator\u2019s version is not aligned with the SDK or platform-tools' version you currently have installed (e.g. 30.x.x vs. SDK 29)")),(0,o.kt)("h2",{id:"emulator-quick-boot"},"Emulator Quick-Boot"),(0,o.kt)("p",null,"If the system allows saving a state (for example, in personal computers or a CI system that can start from prebaked images you can configure), we highly and strongly recommend setting up quick-boot snapshots for any emulator that is used for testing automation."),(0,o.kt)("p",null,"Quick-boot saves significant time otherwise wasted when emulators cold-boot from scratch. The concept becomes more prominent in environments capable of parallel-executing tests in multiple, concurrently running emulators (as when ",(0,o.kt)("a",{parentName:"p",href:"/Detox/docs/next/config/testRunner"},"Detox is run with multiple Jest workers"),")."),(0,o.kt)("p",null,"This is something that we actually recommend applying in the emulator itself rather than using command-line, but we\u2019ll include both options."),(0,o.kt)("p",null,"In any case, the general principle we\u2019re going to instruct is as follows:"),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},"Enable auto-save for an installed / running emulator."),(0,o.kt)("li",{parentName:"ol"},"Launch it, and, when stable, terminate \u2013 a snapshot is saved as a result."),(0,o.kt)("li",{parentName:"ol"},"Disable auto-save, so that future, test-tainted snapshots won\u2019t be saved.")),(0,o.kt)("h3",{id:"setting-up-a-quick-boot-snapshot-from-the-emulator"},"Setting up a quick-boot snapshot from the Emulator"),(0,o.kt)("p",null,"Start by launching a freshly baked emulator. Wait for it to go stable."),(0,o.kt)("p",null,"When running, go to settings (3 dots in the sidebar) > ",(0,o.kt)("inlineCode",{parentName:"p"},"Snapshots")," > ",(0,o.kt)("inlineCode",{parentName:"p"},"Settings")," tab. If not already set, select ",(0,o.kt)("inlineCode",{parentName:"p"},"Yes")," in the ",(0,o.kt)("inlineCode",{parentName:"p"},"auto-save")," option. This should prompt for a restart \u2013 choose ",(0,o.kt)("inlineCode",{parentName:"p"},"Yes"),". The emulator should restart ",(0,o.kt)("strong",{parentName:"p"},"and save a snapshot.")),(0,o.kt)("p",null,(0,o.kt)("img",{alt:"Emulator auto-save menu",src:a(2354).Z,width:"1102",height:"788"})),(0,o.kt)("p",null,"Do this again after the emulator is back up, but set ",(0,o.kt)("inlineCode",{parentName:"p"},"No")," in the ",(0,o.kt)("inlineCode",{parentName:"p"},"auto-save")," option. Allow it to restart yet again: it will immediately boot into the state saved as a snapshot earlier."),(0,o.kt)("p",null,"You can also try these as alternative sources for this:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"https://developer.android.com/studio/run/emulator#snapshots"},"Snapshots in Google Developers page")," for full details on snapshots."),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"https://devblogs.microsoft.com/xamarin/android-emulator-quick-boot/"},"Highly detailed blog post"))),(0,o.kt)("h3",{id:"setting-up-a-quick-boot-snapshot-from-command-line"},"Setting up a quick-boot snapshot from command-line"),(0,o.kt)("p",null,"This is a bit more difficult, but is also applicable even for UI-less machines."),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},(0,o.kt)("a",{parentName:"p",href:"#locating-the-avds-home-directory"},"Locate the AVD\u2019s ",(0,o.kt)("inlineCode",{parentName:"a"},"config.ini")))),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},"Using your favorite text editor, either change or add these key-value sets:"),(0,o.kt)("pre",{parentName:"li"},(0,o.kt)("code",{parentName:"pre",className:"language-ini"},"fastboot.chosenSnapshotFile=\nfastboot.forceChosenSnapshotBoot=no\nfastboot.forceColdBoot=no\nfastboot.forceFastBoot=yes\n")))),(0,o.kt)("blockquote",null,(0,o.kt)("p",{parentName:"blockquote"},"Empirically, ",(0,o.kt)("inlineCode",{parentName:"p"},"forceFastBoot=yes")," and ",(0,o.kt)("inlineCode",{parentName:"p"},"forceColdBoot=no")," should be enough.")),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},"Under the AVD\u2019s home directory, either create or edit yet another ",(0,o.kt)("inlineCode",{parentName:"p"},"ini")," file called ",(0,o.kt)("inlineCode",{parentName:"p"},"quickbootChoice.ini")," with the following content:"),(0,o.kt)("pre",{parentName:"li"},(0,o.kt)("code",{parentName:"pre",className:"language-ini"},"saveOnExit = true\n"))),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},"Now that everything is in place, ",(0,o.kt)("a",{parentName:"p",href:"#booting-an-emulator-via-command-line"},"launch your emulator")," once (in verbose mode) and wait for it to fully load. Then, shut it down, and make sure the ",(0,o.kt)("a",{parentName:"p",href:"#verifying-the-emulators-quick-boot-snapshot-has-been-saved"},"state has been saved"),".")),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},"Last but not least, go back to ",(0,o.kt)("inlineCode",{parentName:"p"},"quickbootChoice.ini")," and now switch to:"),(0,o.kt)("pre",{parentName:"li"},(0,o.kt)("code",{parentName:"pre",className:"language-ini"},"saveOnExit = false\n")))),(0,o.kt)("h3",{id:"test-butler-support-optional"},"Test Butler Support (Optional)"),(0,o.kt)("p",null,"If, when setting up your work environment, you\u2019ve selected Google emulators with an AOSP image as the test target - as recommended,\n",(0,o.kt)("strong",{parentName:"p"},"we strongly encourage")," you would also integrate ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/linkedin/test-butler"},"Test Butler"),": in the very least - in order to suppress crash and ANR dialogs.\nThey are a soft spot in UI testing on Android, all around, as - when displayed,they make the UI entirely inaccessible (and thus cause tests to fail in bulks)."),(0,o.kt)("p",null,"Setting Test Butler up for working with Detox is a bit different than explained in their guides. The process, as a whole, is twofold:"),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},"Preinstalling the test-butler-app APK onto the test device."),(0,o.kt)("li",{parentName:"ol"},"Integrating the test-butler-lib into your own test APK, and initializing it in a custom test runner (as explained).")),(0,o.kt)("p",null,"The library part can be easily achieved as explained there (i.e. by using Gradle\u2019s ",(0,o.kt)("inlineCode",{parentName:"p"},"androidTestImplementation"),"). Same goes for initialization. As for the APK, the suggested usage of Gradle\u2019s ",(0,o.kt)("inlineCode",{parentName:"p"},"androidTestUtil")," is scarce when running with Detox (i.e. non-native instrumentation tests). Here\u2019s what to do instead."),(0,o.kt)("blockquote",null,(0,o.kt)("p",{parentName:"blockquote"},(0,o.kt)("em",{parentName:"p"},"For a complete and thorough coverage of the Test Butler integration with Detox, consider going over our ",(0,o.kt)("a",{parentName:"em",href:"https://medium.com/wix-engineering/how-to-execute-android-ui-tests-on-ci-and-stay-alive-eb9089d88c1f"},"blogpost on CI execution")," on medium"),".")),(0,o.kt)("h4",{id:"solution-1-prebaked-images"},"Solution 1: Prebaked Images"),(0,o.kt)("p",null,"If you have control over the emulators' snapshots, simply download (see test-butler\u2019s guide) and install the test-butler APK once (e.g. use ",(0,o.kt)("inlineCode",{parentName:"p"},"adb install -r -t path/to/test-butler-app.apk"),"), and save an updated version of the snapshot. This is the best solution."),(0,o.kt)("blockquote",null,(0,o.kt)("p",{parentName:"blockquote"},"Note: you will have to reiterate this if you upgrade to a newer version of Test-Butler, in the future.")),(0,o.kt)("h4",{id:"solution-2-dynamic-installation"},"Solution 2: Dynamic Installation"),(0,o.kt)("p",null,"Assuming you have the APK available in the system, you can dynamically have Detox automatically install it in all of the running target-emulators by utilizing ",(0,o.kt)("inlineCode",{parentName:"p"},"utilBinaryPaths")," in your Detox configuration. Example:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "devices": {\n    "emulator.oss": {\n      "type": "android.emulator",\n      "device": "...",\n      "utilBinaryPaths": ["relative/path/to/test-butler-app-2.2.1.apk"],\n    }\n  }\n}\n')),(0,o.kt)("blockquote",null,(0,o.kt)("p",{parentName:"blockquote"},"Refer to our ",(0,o.kt)("a",{parentName:"p",href:"/Detox/docs/next/config/apps"},"configuration guide")," for further details on ",(0,o.kt)("inlineCode",{parentName:"p"},"utilBinaryPaths"),".")),(0,o.kt)("p",null,"As per ",(0,o.kt)("em",{parentName:"p"},"making")," the APK available - for that, we have no really good solution, for the time being (but it\u2019s in the works). A few options might be:"),(0,o.kt)("p",null,"a. In a custom script, have it predownloaded from Maven directly, as suggested in the Test Butler guide. For example (on a Mac / Linux):"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"curl -f -o ./temp/test-butler-app.apk https://repo1.maven.org/maven2/com/linkedin/testbutler/test-butler-app/2.2.1/test-butler-app-2.2.1.apk\n")),(0,o.kt)("blockquote",null,(0,o.kt)("p",{parentName:"blockquote"},"Should you decide to go this path, we recommend you add ",(0,o.kt)("inlineCode",{parentName:"p"},"./temp/test-butler-app.apk")," to the relevant ",(0,o.kt)("inlineCode",{parentName:"p"},".gitignore"),".")),(0,o.kt)("p",null,"b. (Discouraged) Add it to your source control (e.g. git), as part of the repository."),(0,o.kt)("h3",{id:"disclaimer"},"Disclaimer"),(0,o.kt)("p",null,"After upgrading the emulator\u2019s binary to a newer version, it usually considers all existing snapshots invalid."),(0,o.kt)("p",null,"This can be addressed by deleting and recreating the snapshots as explained, or by recreating the AVD\u2019s altogether."),(0,o.kt)("h2",{id:"cheatsheet"},"Cheatsheet"),(0,o.kt)("h3",{id:"locating-the-avds-home-directory"},"Locating the AVD\u2019s home directory"),(0,o.kt)("p",null,"Each AVD generated by the Android tools gets its own directory where associated content is stored:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("strong",{parentName:"li"},"Configuration file (i.e. ",(0,o.kt)("inlineCode",{parentName:"strong"},"config.ini"),")")),(0,o.kt)("li",{parentName:"ul"},"Snapshot images"),(0,o.kt)("li",{parentName:"ul"},"SD-card content")),(0,o.kt)("p",null,"to name a few."),(0,o.kt)("p",null,"On Mac machines, the AVD directory typically maps to:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"$HOME/.android/avd/<AVD Name>.avd/\n")),(0,o.kt)("p",null,(0,o.kt)("em",{parentName:"p"},"(for example: ",(0,o.kt)("inlineCode",{parentName:"em"},"/Users/root/.android/avd/Pixel_API_28_AOSP.avd/"),")")),(0,o.kt)("p",null,"The path should be similar on Linux machines, even though ",(0,o.kt)("inlineCode",{parentName:"p"},"$HOME")," isn\u2019t ",(0,o.kt)("inlineCode",{parentName:"p"},"/Users/root")," but typically ",(0,o.kt)("inlineCode",{parentName:"p"},"/home/root")," ",(0,o.kt)("em",{parentName:"p"},"(for example: ",(0,o.kt)("inlineCode",{parentName:"em"},"/home/root/.android/avd/Pixel_API_28_AOSP.avd/"),").")),(0,o.kt)("h3",{id:"booting-an-emulator-via-command-line"},"Booting an emulator via command-line"),(0,o.kt)("blockquote",null,(0,o.kt)("ul",{parentName:"blockquote"},(0,o.kt)("li",{parentName:"ul"},"The following examples apply for both Mac and Linux, and should be similar on Windows."),(0,o.kt)("li",{parentName:"ul"},"They assume the emulator\u2019s name is ",(0,o.kt)("inlineCode",{parentName:"li"},"Pixel_API_28_AOSP"),". If it isn\u2019t, adjust the names accordingly:"))),(0,o.kt)("h4",{id:"shortcut-for-booting-a-verbose-visible-emulator-in-a-gui-supporting-system"},"Shortcut for booting a verbose, visible emulator in a GUI supporting system"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"$ANDROID_HOME/emulator/emulator -verbose @Pixel_API_28_AOSP &\n")),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"Shortcut for booting a verbose, ",(0,o.kt)("em",{parentName:"strong"},"headless")," emulator in a UI-less Linux system")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"$ANDROID_HOME/emulator/emulator -verbose -no-window -no-audio -gpu swiftshader_indirect @Pixel_API_28_AOSP &\n")),(0,o.kt)("h3",{id:"verifying-the-emulators-quick-boot-snapshot-has-been-saved"},"Verifying the emulator\u2019s quick-boot snapshot has been saved"),(0,o.kt)("p",null,"If you\u2019ve run your emulator in verbose mode from a shell, it\u2019s easy to verify the state has been saved by following the logs. In particular, when shutting the emulator down, this log asserts the state has been saved:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-plain",metastring:"text",text:!0},"emulator: Saving state on exit with session uptime 9423 ms\n")),(0,o.kt)("blockquote",null,(0,o.kt)("p",{parentName:"blockquote"},"as a reference, when the state is ",(0,o.kt)("em",{parentName:"p"},"not")," saved, the typical output is:"),(0,o.kt)("pre",{parentName:"blockquote"},(0,o.kt)("code",{parentName:"pre",className:"language-plain",metastring:"text",text:!0},"emulator: WARNING: Not saving state: RAM not mapped as shared\n")),(0,o.kt)("p",{parentName:"blockquote"},"It can be a result of an improper configuration, or an emulator launch where the ",(0,o.kt)("inlineCode",{parentName:"p"},"-read-only")," argument was provided.")))}d.isMDXComponent=!0},1943:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/images/aosp-image-as-37ababd9a7fb486a0bde4055e29cee14.png"},1928:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/images/aosp-vs-googleapi-852e709646c53864192b23bb47aedcd5.png"},9628:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/images/install-aosp-as-487bc180542ec85812f0b6042f1ee67a.png"},2354:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/images/snapshot-autosave-65e6601712863fa450ed54fc79d010c5.png"},2200:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/images/upgrade-emulator-as-6b05bdb7dd36d8c4ddb3f37bef9fbe1f.png"}}]);