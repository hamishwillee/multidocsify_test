window.$docsify.plugins = [].concat((e,t)=>{
    let o = {
        siteFont: "PT Sans",
        defaultTheme: "dark",
        codeFontFamily: "Roboto Mono, Monaco, courier, monospace",
        bodyFontSize: "17px",
        dark: {
            accent: "#42b983",
            toogleBackground: "#ffffff",
            background: "#091a28",
            toogleImage: "url(https://cdn.jsdelivr.net/npm/docsify-darklight-theme@latest/icons/sun.svg)"
        },
        light: {
            accent: "#42b983",
            toogleBackground: "#091a28",
            background: "#ffffff",
            toogleImage: "url(https://cdn.jsdelivr.net/npm/docsify-darklight-theme@latest/icons/moon.svg)"
        }
    };
    if (t.config.hasOwnProperty("darklightTheme")) {
        for (var [r,d] of Object.entries(t.config.darklightTheme))
            "light" !== r && "dark" !== r && "defaultTheme" !== r && (o[r] = d);
        for (var [r,d] of Object.entries(o))
            "light" !== r && "dark" !== r && (o[r] = d,
            document.documentElement.style.setProperty("--" + r, d));
        if (t.config.darklightTheme.hasOwnProperty("dark"))
            for (var [r,d] of Object.entries(t.config.darklightTheme.dark))
                o.dark[r] = d;
        if (t.config.darklightTheme.hasOwnProperty("light"))
            for (var [r,d] of Object.entries(t.config.darklightTheme.light))
                o.light[r] = d
    } else
        for (var [r,d] of Object.entries(o))
            "light" !== r && "dark" !== r && (o[r] = d,
            document.documentElement.style.setProperty("--" + r, d));
    window.matchMedia("(prefers-color-scheme: dark)").matches ? o.defaultTheme = "dark" : window.matchMedia("(prefers-color-scheme: light)").matches && (o.defaultTheme = "light");
    var i = e=>{
        if (document.getElementById("docsify-darklight-theme").setAttribute("data-link-title", e),
        document.getElementById("docsify-darklight-theme").click(),
        localStorage.setItem("DARK_LIGHT_THEME", e),
        o.defaultTheme = e,
        "light" == e)
            for (var [t,r] of Object.entries(o.light))
                document.documentElement.style.setProperty("--" + t, r);
        else if ("dark" == e)
            for (var [t,r] of Object.entries(o.dark))
                document.documentElement.style.setProperty("--" + t, r)
    }
    ;

    e.mounted(function() {
        // Called when the script starts running, only trigger once, no arguments,
		const appNavBar = document.getElementsByClassName("app-nav")[0];
		const dark_light_node = document.createElement('div');
		dark_light_node.setAttribute('id', 'docsify-darklight-theme');
		dark_light_node.innerHTML = '<p>.</p>';
		dark_light_node.style.display = 'inline-block';
		dark_light_node.style.position = 'relative';
		dark_light_node.style.top = '15px';
		appNavBar.appendChild(dark_light_node); //
		
      });

						
						
	/*
    e.afterEach((function(e, t) {
        t(e = '<div id="docsify-darklight-theme"><p>.</p></div>' + e)
    }
	
    )),
	*/
    e.doneEach((function() {
        let e = localStorage.getItem("DARK_LIGHT_THEME");
        "light" == e || "dark" == e ? (o.defaultTheme = e,
        i(o.defaultTheme)) : i(o.defaultTheme),
        document.getElementById("docsify-darklight-theme").addEventListener("click", (function() {
            "light" === o.defaultTheme ? i("dark") : i("light")
        }
        ))
    }
    ))
}
, window.$docsify.plugins);
