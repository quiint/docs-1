"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[353],{3905:function(e,t,n){n.d(t,{Zo:function(){return d},kt:function(){return h}});var i=n(7294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);t&&(i=i.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,i)}return n}function r(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,i,a=function(e,t){if(null==e)return{};var n,i,a={},o=Object.keys(e);for(i=0;i<o.length;i++)n=o[i],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(i=0;i<o.length;i++)n=o[i],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var s=i.createContext({}),c=function(e){var t=i.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):r(r({},t),e)),n},d=function(e){var t=c(e.components);return i.createElement(s.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return i.createElement(i.Fragment,{},t)}},p=i.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,s=e.parentName,d=l(e,["components","mdxType","originalType","parentName"]),p=c(n),h=a,f=p["".concat(s,".").concat(h)]||p[h]||u[h]||o;return n?i.createElement(f,r(r({ref:t},d),{},{components:n})):i.createElement(f,r({ref:t},d))}));function h(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,r=new Array(o);r[0]=p;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l.mdxType="string"==typeof e?e:a,r[1]=l;for(var c=2;c<o;c++)r[c]=n[c];return i.createElement.apply(null,r)}return i.createElement.apply(null,n)}p.displayName="MDXCreateElement"},888:function(e,t,n){n.r(t),n.d(t,{frontMatter:function(){return l},contentTitle:function(){return s},metadata:function(){return c},toc:function(){return d},default:function(){return p}});var i=n(7462),a=n(3366),o=(n(7294),n(3905)),r=["components"],l={},s="Terminology",c={unversionedId:"about/terminology",id:"about/terminology",isDocsHomePage:!1,title:"Terminology",description:"Non-fungible tokens",source:"@site/docs/about/terminology.md",sourceDirName:"about",slug:"/about/terminology",permalink:"/docs/docs/about/terminology",editUrl:"https://github.com/metaplex/docs/docs/about/terminology.md",tags:[],version:"current",frontMatter:{},sidebar:"sidebar",next:{title:"Introduction",permalink:"/docs/docs/create-store/introduction"}},d=[{value:"Non-fungible tokens",id:"non-fungible-tokens",children:[{value:"<strong>Master Edition</strong>",id:"master-edition",children:[]},{value:"<strong>Print</strong>",id:"print",children:[]},{value:"Normal NFT",id:"normal-nft",children:[]}]},{value:"Types of Auctions",id:"types-of-auctions",children:[{value:"Single Item",id:"single-item",children:[]},{value:"Open Edition",id:"open-edition",children:[]},{value:"Limited Edition",id:"limited-edition",children:[]},{value:"Tiered Auction",id:"tiered-auction",children:[]}]},{value:"Royalties",id:"royalties",children:[]},{value:"Storefronts",id:"storefronts",children:[]}],u={toc:d};function p(e){var t=e.components,n=(0,a.Z)(e,r);return(0,o.kt)("wrapper",(0,i.Z)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"terminology"},"Terminology"),(0,o.kt)("h2",{id:"non-fungible-tokens"},"Non-fungible tokens"),(0,o.kt)("p",null,"Metaplex's non-fungible-token standard is a part of the Solana Program Library (SPL), and can be characterized as a unique token with a fixed supply of 1 and 0 decimals. We extended the basic definition of an NFT on Solana to include additional metadata such as URI as defined in ERC-721 on Ethereum."),(0,o.kt)("p",null,"Below are the types of NFTs that can be created using the Metaplex protocol."),(0,o.kt)("h3",{id:"master-edition"},(0,o.kt)("strong",{parentName:"h3"},"Master Edition")),(0,o.kt)("p",null,"A master edition token, when minted, represents both a non-fungible token on Solana and metadata that allows creators to control the provenance of prints created from the master edition."),(0,o.kt)("p",null,"Rights to create prints are tokenized itself, and the owner of the master edition can distribute tokens that allow users to create prints from master editions. Additionally, the creator can set the max supply of the master edition just like a regular mint on Solana, with the main difference being that each print is a numbered edition created from it."),(0,o.kt)("p",null,"A notable and desirable effect of master editions is that as prints are sold, the artwork will still remain visible in the artist's wallet as a master edition, while the prints appear in the purchaser's wallets."),(0,o.kt)("h3",{id:"print"},(0,o.kt)("strong",{parentName:"h3"},"Print")),(0,o.kt)("p",null,"A ",(0,o.kt)("strong",{parentName:"p"},"print")," represents a copy of an NFT, and is created from a Master Edition. Each print has an edition number associated with it."),(0,o.kt)("p",null,"Usually, prints are created as a part of an auction that has happened on Metaplex, but they could also be created by the creator manually."),(0,o.kt)("p",null,"For limited auctions, each print number is awarded based on the bid placement."),(0,o.kt)("p",null,"Prints can be created during ",(0,o.kt)("a",{parentName:"p",href:"#open-edition"},"Open Edition")," or ",(0,o.kt)("a",{parentName:"p",href:"#limited-edition"},"Limited Edition")," auction."),(0,o.kt)("h3",{id:"normal-nft"},"Normal NFT"),(0,o.kt)("p",null,"A normal NFT (like a Master Edition) when minted represents a non-fungible token on Solana and metadata, but lacks rights to print."),(0,o.kt)("p",null,"An example of a normal NFT would be an artwork that is a one-of-a-kind that, once sold, is no longer within the artist's own wallet, but is in the purchaser's wallet."),(0,o.kt)("h2",{id:"types-of-auctions"},"Types of Auctions"),(0,o.kt)("p",null,"Metaplex currently supports four types of auctions that are all derived from English auctions."),(0,o.kt)("p",null,"Basic parameters include:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"Auction start time"),(0,o.kt)("li",{parentName:"ul"},"Auction end time"),(0,o.kt)("li",{parentName:"ul"},"Reservation price")),(0,o.kt)("p",null,"Additionally, Metaplex includes a novel concept of the participation NFT. Each bidding participant can be rewarded a unique NFT for participating in the auction."),(0,o.kt)("p",null,'The creator of an auction also has the ability to configure a minimal price that should be charged for redemption, with the option to set it as "free".'),(0,o.kt)("h3",{id:"single-item"},"Single Item"),(0,o.kt)("p",null,"This type of auction can be used to sell normal NFTs and re-sell Prints, as well as the sale of Master Edition themselves (and the associated printing rights) if the artist so wishes. While this last behavior is not exposed in the current UI, it does exist in the protocol."),(0,o.kt)("h3",{id:"open-edition"},"Open Edition"),(0,o.kt)("p",null,'An open edition auction requires the offering of a Master Edition NFT that specifically has no set supply. The auction will only create Prints of this item for bidders: each bidder is guaranteed to get a print, as there are no true "winners" of this auction type.'),(0,o.kt)("p",null,"An open edition auction can either have a set fixed price (equivalent to a Buy Now sale), can be set to the bid price (Pay what you want), or can be free (Make any bid to get it for free)."),(0,o.kt)("h3",{id:"limited-edition"},"Limited Edition"),(0,o.kt)("p",null,"For a limited edition auction, a Master Edition NFT (of limited or unlimited supply) may be provided to the auction with a number of copies as the set amount of winning places."),(0,o.kt)("p",null,"For each prize place, a Print will be minted in order of prize place, and awarded to the winning bidder of that place."),(0,o.kt)("p",null,"For example, the first place winner will win Print #1; the second place winner Print #2; and so on."),(0,o.kt)("p",null,"It is required for limited supply NFTs that there is at least as much supply remaining as there are desired winners in the auction."),(0,o.kt)("h3",{id:"tiered-auction"},"Tiered Auction"),(0,o.kt)("p",null,"A tiered auction can contain a mix of the other three auction types as winning placements. For instance, the first place winner could win a Print of Limited Edition NFT A, while the second-place winner could win Normal NFT, and so on. Additionally, all participants who did not win any place could get a Participation NFT Print from a Master Edition (if the Master Edition had no supply limit)."),(0,o.kt)("h2",{id:"royalties"},"Royalties"),(0,o.kt)("p",null,"Metaplex can seamlessly create on-chain artist splits that remove the awkwardness out of collaboration."),(0,o.kt)("p",null,"Tag each collaborator, set custom percentages, and you\u2019re off to the races. Each NFT can also be minted with configurable royalty payments that are then sent automatically back to the original creators whenever an artwork is resold on a Metaplex marketplace in the future."),(0,o.kt)("h2",{id:"storefronts"},"Storefronts"),(0,o.kt)("p",null,"Metaplex's off-chain component allows creators to launch a custom storefront, similar to Shopify or WordPress. This open-source project provides a graphical interface to the on-chain Metaplex program, for creators, buyers, and curators of NFTs. The design and layout of storefronts can be customized to suit the needs of the entity creating it, either as a permanent storefront or an auction hub for a specific auction or collection."),(0,o.kt)("p",null,"All identification on the Storefront is based on wallet addresses. Creators and store admins sign through their wallets, and users place bids from connected wallets. Custom storefronts allow creators to create unique experiences per auction. Additionally, the Metaplex Foundation is working on multiple partnerships that will enable building immersive storefronts using VR/AR."))}p.isMDXComponent=!0}}]);