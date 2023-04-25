"use strict";(self.webpackChunklazyvim=self.webpackChunklazyvim||[]).push([[928],{3905:(e,n,t)=>{t.d(n,{Zo:()=>p,kt:()=>f});var a=t(7294);function s(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function r(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);n&&(a=a.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,a)}return t}function l(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?r(Object(t),!0).forEach((function(n){s(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):r(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function i(e,n){if(null==e)return{};var t,a,s=function(e,n){if(null==e)return{};var t,a,s={},r=Object.keys(e);for(a=0;a<r.length;a++)t=r[a],n.indexOf(t)>=0||(s[t]=e[t]);return s}(e,n);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(a=0;a<r.length;a++)t=r[a],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(s[t]=e[t])}return s}var o=a.createContext({}),u=function(e){var n=a.useContext(o),t=n;return e&&(t="function"==typeof e?e(n):l(l({},n),e)),t},p=function(e){var n=u(e.components);return a.createElement(o.Provider,{value:n},e.children)},c="mdxType",m={inlineCode:"code",wrapper:function(e){var n=e.children;return a.createElement(a.Fragment,{},n)}},d=a.forwardRef((function(e,n){var t=e.components,s=e.mdxType,r=e.originalType,o=e.parentName,p=i(e,["components","mdxType","originalType","parentName"]),c=u(t),d=s,f=c["".concat(o,".").concat(d)]||c[d]||m[d]||r;return t?a.createElement(f,l(l({ref:n},p),{},{components:t})):a.createElement(f,l({ref:n},p))}));function f(e,n){var t=arguments,s=n&&n.mdxType;if("string"==typeof e||s){var r=t.length,l=new Array(r);l[0]=d;var i={};for(var o in n)hasOwnProperty.call(n,o)&&(i[o]=n[o]);i.originalType=e,i[c]="string"==typeof e?e:s,l[1]=i;for(var u=2;u<r;u++)l[u]=t[u];return a.createElement.apply(null,l)}return a.createElement.apply(null,t)}d.displayName="MDXCreateElement"},5162:(e,n,t)=>{t.d(n,{Z:()=>l});var a=t(7294),s=t(6010);const r="tabItem_Ymn6";function l(e){let{children:n,hidden:t,className:l}=e;return a.createElement("div",{role:"tabpanel",className:(0,s.Z)(r,l),hidden:t},n)}},4866:(e,n,t)=>{t.d(n,{Z:()=>T});var a=t(7462),s=t(7294),r=t(6010),l=t(2466),i=t(6550),o=t(1980),u=t(7392),p=t(12);function c(e){return function(e){return s.Children.map(e,(e=>{if(!e||(0,s.isValidElement)(e)&&function(e){const{props:n}=e;return!!n&&"object"==typeof n&&"value"in n}(e))return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)}))?.filter(Boolean)??[]}(e).map((e=>{let{props:{value:n,label:t,attributes:a,default:s}}=e;return{value:n,label:t,attributes:a,default:s}}))}function m(e){const{values:n,children:t}=e;return(0,s.useMemo)((()=>{const e=n??c(t);return function(e){const n=(0,u.l)(e,((e,n)=>e.value===n.value));if(n.length>0)throw new Error(`Docusaurus error: Duplicate values "${n.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`)}(e),e}),[n,t])}function d(e){let{value:n,tabValues:t}=e;return t.some((e=>e.value===n))}function f(e){let{queryString:n=!1,groupId:t}=e;const a=(0,i.k6)(),r=function(e){let{queryString:n=!1,groupId:t}=e;if("string"==typeof n)return n;if(!1===n)return null;if(!0===n&&!t)throw new Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return t??null}({queryString:n,groupId:t});return[(0,o._X)(r),(0,s.useCallback)((e=>{if(!r)return;const n=new URLSearchParams(a.location.search);n.set(r,e),a.replace({...a.location,search:n.toString()})}),[r,a])]}function v(e){const{defaultValue:n,queryString:t=!1,groupId:a}=e,r=m(e),[l,i]=(0,s.useState)((()=>function(e){let{defaultValue:n,tabValues:t}=e;if(0===t.length)throw new Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(n){if(!d({value:n,tabValues:t}))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${n}" but none of its children has the corresponding value. Available values are: ${t.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);return n}const a=t.find((e=>e.default))??t[0];if(!a)throw new Error("Unexpected error: 0 tabValues");return a.value}({defaultValue:n,tabValues:r}))),[o,u]=f({queryString:t,groupId:a}),[c,v]=function(e){let{groupId:n}=e;const t=function(e){return e?`docusaurus.tab.${e}`:null}(n),[a,r]=(0,p.Nk)(t);return[a,(0,s.useCallback)((e=>{t&&r.set(e)}),[t,r])]}({groupId:a}),g=(()=>{const e=o??c;return d({value:e,tabValues:r})?e:null})();(0,s.useLayoutEffect)((()=>{g&&i(g)}),[g]);return{selectedValue:l,selectValue:(0,s.useCallback)((e=>{if(!d({value:e,tabValues:r}))throw new Error(`Can't select invalid tab value=${e}`);i(e),u(e),v(e)}),[u,v,r]),tabValues:r}}var g=t(2389);const h="tabList__CuJ",b="tabItem_LNqP";function y(e){let{className:n,block:t,selectedValue:i,selectValue:o,tabValues:u}=e;const p=[],{blockElementScrollPositionUntilNextRender:c}=(0,l.o5)(),m=e=>{const n=e.currentTarget,t=p.indexOf(n),a=u[t].value;a!==i&&(c(n),o(a))},d=e=>{let n=null;switch(e.key){case"Enter":m(e);break;case"ArrowRight":{const t=p.indexOf(e.currentTarget)+1;n=p[t]??p[0];break}case"ArrowLeft":{const t=p.indexOf(e.currentTarget)-1;n=p[t]??p[p.length-1];break}}n?.focus()};return s.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,r.Z)("tabs",{"tabs--block":t},n)},u.map((e=>{let{value:n,label:t,attributes:l}=e;return s.createElement("li",(0,a.Z)({role:"tab",tabIndex:i===n?0:-1,"aria-selected":i===n,key:n,ref:e=>p.push(e),onKeyDown:d,onClick:m},l,{className:(0,r.Z)("tabs__item",b,l?.className,{"tabs__item--active":i===n})}),t??n)})))}function k(e){let{lazy:n,children:t,selectedValue:a}=e;const r=(Array.isArray(t)?t:[t]).filter(Boolean);if(n){const e=r.find((e=>e.props.value===a));return e?(0,s.cloneElement)(e,{className:"margin-top--md"}):null}return s.createElement("div",{className:"margin-top--md"},r.map(((e,n)=>(0,s.cloneElement)(e,{key:n,hidden:e.props.value!==a}))))}function _(e){const n=v(e);return s.createElement("div",{className:(0,r.Z)("tabs-container",h)},s.createElement(y,(0,a.Z)({},e,n)),s.createElement(k,(0,a.Z)({},e,n)))}function T(e){const n=(0,g.Z)();return s.createElement(_,(0,a.Z)({key:String(n)},e))}},965:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>p,contentTitle:()=>o,default:()=>d,frontMatter:()=>i,metadata:()=>u,toc:()=>c});var a=t(7462),s=(t(7294),t(3905)),r=t(4866),l=t(5162);const i={},o="LSP",u={unversionedId:"plugins/lsp",id:"plugins/lsp",title:"LSP",description:"\u2328\ufe0f Customizing LSP Keymaps",source:"@site/docs/plugins/lsp.md",sourceDirName:"plugins",slug:"/plugins/lsp",permalink:"/plugins/lsp",draft:!1,editUrl:"https://github.com/LazyVim/lazyvim.github.io/tree/master/docs/plugins/lsp.md",tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"Project",permalink:"/plugins/extras/util.project"},next:{title:"TreeSitter",permalink:"/plugins/treesitter"}},p={},c=[{value:"\u2328\ufe0f Customizing LSP Keymaps",id:"\ufe0f-customizing-lsp-keymaps",level:2},{value:"nvim-lspconfig",id:"nvim-lspconfig",level:2},{value:"neoconf.nvim",id:"neoconfnvim",level:2},{value:"neodev.nvim",id:"neodevnvim",level:2},{value:"mason-lspconfig.nvim",id:"mason-lspconfignvim",level:2},{value:"cmp-nvim-lsp",id:"cmp-nvim-lsp",level:2},{value:"null-ls.nvim",id:"null-lsnvim",level:2},{value:"mason.nvim",id:"masonnvim",level:2}],m={toc:c};function d(e){let{components:n,...t}=e;return(0,s.kt)("wrapper",(0,a.Z)({},m,t,{components:n,mdxType:"MDXLayout"}),(0,s.kt)("h1",{id:"lsp"},"LSP"),(0,s.kt)("h2",{id:"\ufe0f-customizing-lsp-keymaps"},"\u2328\ufe0f Customizing ",(0,s.kt)("a",{parentName:"h2",href:"/keymaps#lsp"},"LSP Keymaps")),(0,s.kt)("p",null,"The syntax for adding, deleting and changing ",(0,s.kt)("a",{parentName:"p",href:"/keymaps#lsp"},"LSP Keymaps"),",\nis the same as for ",(0,s.kt)("a",{parentName:"p",href:"/plugins#%EF%B8%8F-adding--disabling-plugin-keymaps"},"plugin keymaps"),",\nbut you need to configure it using the ",(0,s.kt)("inlineCode",{parentName:"p"},"init()")," method."),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-lua"},'-- LSP keymaps\n{\n  "neovim/nvim-lspconfig",\n  init = function()\n    local keys = require("lazyvim.plugins.lsp.keymaps").get()\n    -- change a keymap\n    keys[#keys + 1] = { "K", "<cmd>echo \'hello\'<cr>" }\n    -- disable a keymap\n    keys[#keys + 1] = { "K", false }\n    -- add a keymap\n    keys[#keys + 1] = { "H", "<cmd>echo \'hello\'<cr>" }\n  end,\n}\n')),(0,s.kt)("h2",{id:"nvim-lspconfig"},(0,s.kt)("a",{parentName:"h2",href:"https://github.com/neovim/nvim-lspconfig"},"nvim-lspconfig")),(0,s.kt)("p",null," lspconfig"),(0,s.kt)(r.Z,{mdxType:"Tabs"},(0,s.kt)(l.Z,{value:"opts",label:"Options",mdxType:"TabItem"},(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-lua"},'opts = {\n  -- options for vim.diagnostic.config()\n  diagnostics = {\n    underline = true,\n    update_in_insert = false,\n    virtual_text = {\n      spacing = 4,\n      source = "if_many",\n      prefix = "\u25cf",\n      -- this will set set the prefix to a function that returns the diagnostics icon based on the severity\n      -- this only works on a recent 0.10.0 build. Will be set to "\u25cf" when not supported\n      -- prefix = "icons",\n    },\n    severity_sort = true,\n  },\n  -- add any global capabilities here\n  capabilities = {},\n  -- Automatically format on save\n  autoformat = true,\n  -- options for vim.lsp.buf.format\n  -- `bufnr` and `filter` is handled by the LazyVim formatter,\n  -- but can be also overridden when specified\n  format = {\n    formatting_options = nil,\n    timeout_ms = nil,\n  },\n  -- LSP Server Settings\n  ---@type lspconfig.options\n  servers = {\n    jsonls = {},\n    lua_ls = {\n      -- mason = false, -- set to false if you don\'t want this server to be installed with mason\n      settings = {\n        Lua = {\n          workspace = {\n            checkThirdParty = false,\n          },\n          completion = {\n            callSnippet = "Replace",\n          },\n        },\n      },\n    },\n  },\n  -- you can do any additional lsp server setup here\n  -- return true if you don\'t want this server to be setup with lspconfig\n  ---@type table<string, fun(server:string, opts:_.lspconfig.options):boolean?>\n  setup = {\n    -- example to setup with typescript.nvim\n    -- tsserver = function(_, opts)\n    --   require("typescript").setup({ server = opts })\n    --   return true\n    -- end,\n    -- Specify * to use this function as a fallback for any server\n    -- ["*"] = function(server, opts) end,\n  },\n}\n'))),(0,s.kt)(l.Z,{value:"code",label:"Full Spec",mdxType:"TabItem"},(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-lua"},'{\n  "neovim/nvim-lspconfig",\n  event = { "BufReadPre", "BufNewFile" },\n  dependencies = {\n    { "folke/neoconf.nvim", cmd = "Neoconf", config = true },\n    { "folke/neodev.nvim", opts = { experimental = { pathStrict = true } } },\n    "mason.nvim",\n    "williamboman/mason-lspconfig.nvim",\n    {\n      "hrsh7th/cmp-nvim-lsp",\n      cond = function()\n        return require("lazyvim.util").has("nvim-cmp")\n      end,\n    },\n  },\n  ---@class PluginLspOpts\n  opts = {\n    -- options for vim.diagnostic.config()\n    diagnostics = {\n      underline = true,\n      update_in_insert = false,\n      virtual_text = {\n        spacing = 4,\n        source = "if_many",\n        prefix = "\u25cf",\n        -- this will set set the prefix to a function that returns the diagnostics icon based on the severity\n        -- this only works on a recent 0.10.0 build. Will be set to "\u25cf" when not supported\n        -- prefix = "icons",\n      },\n      severity_sort = true,\n    },\n    -- add any global capabilities here\n    capabilities = {},\n    -- Automatically format on save\n    autoformat = true,\n    -- options for vim.lsp.buf.format\n    -- `bufnr` and `filter` is handled by the LazyVim formatter,\n    -- but can be also overridden when specified\n    format = {\n      formatting_options = nil,\n      timeout_ms = nil,\n    },\n    -- LSP Server Settings\n    ---@type lspconfig.options\n    servers = {\n      jsonls = {},\n      lua_ls = {\n        -- mason = false, -- set to false if you don\'t want this server to be installed with mason\n        settings = {\n          Lua = {\n            workspace = {\n              checkThirdParty = false,\n            },\n            completion = {\n              callSnippet = "Replace",\n            },\n          },\n        },\n      },\n    },\n    -- you can do any additional lsp server setup here\n    -- return true if you don\'t want this server to be setup with lspconfig\n    ---@type table<string, fun(server:string, opts:_.lspconfig.options):boolean?>\n    setup = {\n      -- example to setup with typescript.nvim\n      -- tsserver = function(_, opts)\n      --   require("typescript").setup({ server = opts })\n      --   return true\n      -- end,\n      -- Specify * to use this function as a fallback for any server\n      -- ["*"] = function(server, opts) end,\n    },\n  },\n  ---@param opts PluginLspOpts\n  config = function(_, opts)\n    local Util = require("lazyvim.util")\n    -- setup autoformat\n    require("lazyvim.plugins.lsp.format").autoformat = opts.autoformat\n    -- setup formatting and keymaps\n    Util.on_attach(function(client, buffer)\n      require("lazyvim.plugins.lsp.format").on_attach(client, buffer)\n      require("lazyvim.plugins.lsp.keymaps").on_attach(client, buffer)\n    end)\n\n    -- diagnostics\n    for name, icon in pairs(require("lazyvim.config").icons.diagnostics) do\n      name = "DiagnosticSign" .. name\n      vim.fn.sign_define(name, { text = icon, texthl = name, numhl = "" })\n    end\n\n    if type(opts.diagnostics.virtual_text) == "table" and opts.diagnostics.virtual_text.prefix == "icons" then\n      opts.diagnostics.virtual_text.prefix = vim.fn.has("nvim-0.10.0") == 0 and "\u25cf"\n        or function(diagnostic)\n          local icons = require("lazyvim.config").icons.diagnostics\n          for d, icon in pairs(icons) do\n            if diagnostic.severity == vim.diagnostic.severity[d:upper()] then\n              return icon\n            end\n          end\n        end\n    end\n\n    vim.diagnostic.config(vim.deepcopy(opts.diagnostics))\n\n    local servers = opts.servers\n    local capabilities = vim.tbl_deep_extend(\n      "force",\n      {},\n      vim.lsp.protocol.make_client_capabilities(),\n      require("cmp_nvim_lsp").default_capabilities(),\n      opts.capabilities or {}\n    )\n\n    local function setup(server)\n      local server_opts = vim.tbl_deep_extend("force", {\n        capabilities = vim.deepcopy(capabilities),\n      }, servers[server] or {})\n\n      if opts.setup[server] then\n        if opts.setup[server](server, server_opts) then\n          return\n        end\n      elseif opts.setup["*"] then\n        if opts.setup["*"](server, server_opts) then\n          return\n        end\n      end\n      require("lspconfig")[server].setup(server_opts)\n    end\n\n    -- get all the servers that are available thourgh mason-lspconfig\n    local have_mason, mlsp = pcall(require, "mason-lspconfig")\n    local all_mslp_servers = {}\n    if have_mason then\n      all_mslp_servers = vim.tbl_keys(require("mason-lspconfig.mappings.server").lspconfig_to_package)\n    end\n\n    local ensure_installed = {} ---@type string[]\n    for server, server_opts in pairs(servers) do\n      if server_opts then\n        server_opts = server_opts == true and {} or server_opts\n        -- run manual setup if mason=false or if this is a server that cannot be installed with mason-lspconfig\n        if server_opts.mason == false or not vim.tbl_contains(all_mslp_servers, server) then\n          setup(server)\n        else\n          ensure_installed[#ensure_installed + 1] = server\n        end\n      end\n    end\n\n    if have_mason then\n      mlsp.setup({ ensure_installed = ensure_installed })\n      mlsp.setup_handlers({ setup })\n    end\n\n    if Util.lsp_get_config("denols") and Util.lsp_get_config("tsserver") then\n      local is_deno = require("lspconfig.util").root_pattern("deno.json", "deno.jsonc")\n      Util.lsp_disable("tsserver", is_deno)\n      Util.lsp_disable("denols", function(root_dir)\n        return not is_deno(root_dir)\n      end)\n    end\n  end,\n}\n')))),(0,s.kt)("h2",{id:"neoconfnvim"},(0,s.kt)("a",{parentName:"h2",href:"https://github.com/folke/neoconf.nvim"},"neoconf.nvim")),(0,s.kt)(r.Z,{mdxType:"Tabs"},(0,s.kt)(l.Z,{value:"opts",label:"Options",mdxType:"TabItem"},(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-lua"},"opts = {}\n"))),(0,s.kt)(l.Z,{value:"code",label:"Full Spec",mdxType:"TabItem"},(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-lua"},'{ "folke/neoconf.nvim", cmd = "Neoconf", config = true }\n')))),(0,s.kt)("h2",{id:"neodevnvim"},(0,s.kt)("a",{parentName:"h2",href:"https://github.com/folke/neodev.nvim"},"neodev.nvim")),(0,s.kt)(r.Z,{mdxType:"Tabs"},(0,s.kt)(l.Z,{value:"opts",label:"Options",mdxType:"TabItem"},(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-lua"},"opts = { experimental = { pathStrict = true } }\n"))),(0,s.kt)(l.Z,{value:"code",label:"Full Spec",mdxType:"TabItem"},(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-lua"},'{ "folke/neodev.nvim", opts = { experimental = { pathStrict = true } } }\n')))),(0,s.kt)("h2",{id:"mason-lspconfignvim"},(0,s.kt)("a",{parentName:"h2",href:"https://github.com/williamboman/mason-lspconfig.nvim"},"mason-lspconfig.nvim")),(0,s.kt)(r.Z,{mdxType:"Tabs"},(0,s.kt)(l.Z,{value:"opts",label:"Options",mdxType:"TabItem"},(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-lua"},"opts = nil\n"))),(0,s.kt)(l.Z,{value:"code",label:"Full Spec",mdxType:"TabItem"},(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-lua"},'"williamboman/mason-lspconfig.nvim"\n')))),(0,s.kt)("h2",{id:"cmp-nvim-lsp"},(0,s.kt)("a",{parentName:"h2",href:"https://github.com/hrsh7th/cmp-nvim-lsp"},"cmp-nvim-lsp")),(0,s.kt)(r.Z,{mdxType:"Tabs"},(0,s.kt)(l.Z,{value:"opts",label:"Options",mdxType:"TabItem"},(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-lua"},"opts = nil\n"))),(0,s.kt)(l.Z,{value:"code",label:"Full Spec",mdxType:"TabItem"},(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-lua"},'{\n  "hrsh7th/cmp-nvim-lsp",\n  cond = function()\n    return require("lazyvim.util").has("nvim-cmp")\n  end,\n}\n')))),(0,s.kt)("h2",{id:"null-lsnvim"},(0,s.kt)("a",{parentName:"h2",href:"https://github.com/jose-elias-alvarez/null-ls.nvim"},"null-ls.nvim")),(0,s.kt)("p",null," formatters"),(0,s.kt)(r.Z,{mdxType:"Tabs"},(0,s.kt)(l.Z,{value:"opts",label:"Options",mdxType:"TabItem"},(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-lua"},'opts = function()\n  local nls = require("null-ls")\n  return {\n    root_dir = require("null-ls.utils").root_pattern(".null-ls-root", ".neoconf.json", "Makefile", ".git"),\n    sources = {\n      nls.builtins.formatting.fish_indent,\n      nls.builtins.diagnostics.fish,\n      nls.builtins.formatting.stylua,\n      nls.builtins.formatting.shfmt,\n      -- nls.builtins.diagnostics.flake8,\n    },\n  }\nend\n'))),(0,s.kt)(l.Z,{value:"code",label:"Full Spec",mdxType:"TabItem"},(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-lua"},'{\n  "jose-elias-alvarez/null-ls.nvim",\n  event = { "BufReadPre", "BufNewFile" },\n  dependencies = { "mason.nvim" },\n  opts = function()\n    local nls = require("null-ls")\n    return {\n      root_dir = require("null-ls.utils").root_pattern(".null-ls-root", ".neoconf.json", "Makefile", ".git"),\n      sources = {\n        nls.builtins.formatting.fish_indent,\n        nls.builtins.diagnostics.fish,\n        nls.builtins.formatting.stylua,\n        nls.builtins.formatting.shfmt,\n        -- nls.builtins.diagnostics.flake8,\n      },\n    }\n  end,\n}\n')))),(0,s.kt)("h2",{id:"masonnvim"},(0,s.kt)("a",{parentName:"h2",href:"https://github.com/williamboman/mason.nvim"},"mason.nvim")),(0,s.kt)("p",null," cmdline tools and lsp servers"),(0,s.kt)(r.Z,{mdxType:"Tabs"},(0,s.kt)(l.Z,{value:"opts",label:"Options",mdxType:"TabItem"},(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-lua"},'opts = {\n  ensure_installed = {\n    "stylua",\n    "shfmt",\n    -- "flake8",\n  },\n}\n'))),(0,s.kt)(l.Z,{value:"code",label:"Full Spec",mdxType:"TabItem"},(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-lua"},'{\n\n  "williamboman/mason.nvim",\n  cmd = "Mason",\n  keys = { { "<leader>cm", "<cmd>Mason<cr>", desc = "Mason" } },\n  opts = {\n    ensure_installed = {\n      "stylua",\n      "shfmt",\n      -- "flake8",\n    },\n  },\n  ---@param opts MasonSettings | {ensure_installed: string[]}\n  config = function(_, opts)\n    require("mason").setup(opts)\n    local mr = require("mason-registry")\n    local function ensure_installed()\n      for _, tool in ipairs(opts.ensure_installed) do\n        local p = mr.get_package(tool)\n        if not p:is_installed() then\n          p:install()\n        end\n      end\n    end\n    if mr.refresh then\n      mr.refresh(ensure_installed)\n    else\n      ensure_installed()\n    end\n  end,\n}\n')))))}d.isMDXComponent=!0}}]);