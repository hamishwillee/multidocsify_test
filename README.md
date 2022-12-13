# multidocsify_test

Test repo for docsify

This version attempts to construct PX4 librarie and versions dynamically

Not too hopeful. Though maybe. Lets see 

https://github.com/docsifyjs/docsify/issues/1684


```
docsify serve .
```

https://docsify.js.org/#/configuration

## PX4 User Guide

Todo:

- [ ] Sidebar
- Languages
- Versions
- Search
- Images
- Conditional pages like the ones for "see master version" 
  - Partially done. 
  - The ones in /contribute/ are all aliased, but not necessarily all of the pages affect - search to find out.
  - But text on that page is still wrong so need to tidy that source if we migrate.
- Navbar - other useful links.
- Uorb dynamic has to work
- Nice to have new theme
- See if can redirect incoming links to new URL pattern. In particular for parameters.
- Edit current page links
- Collapsible sidebar
- DONE PR testing : Format URL like /redir_repo/lang/username/reponame/branchname/...   (aliased)
  /redir_repo/lang/username/PX4-user_guide/branchname/ 

- Local testing 
  - Kind of just works, but you need a different base URL. So a manual step.
  
- Dynamic update of links to repos, such as github, based on subsitution of /main/, /master/ for a particular release. Needs evaluation.
  
- Work out how to remove SUMMARY section if it exists from top of MD
- DONE Fix up reference links to be absolute links: (https://github.com/PX4/PX4-user_guide/edit/main/en/assembly/cable_wiring.md) //   > [rcircle]: ../../assets/hardware/cables/red.png

- DONE youtube syntax - currently @[youtube](https://youtu.be/91VGmdSlbo4) 
 - Test page http://localhost:3000/#/main/en/config/README?id=video-guide
 - Basically replace syntax with image and a link
 
- What happens if we see `<Redirect to="dev_env_linux_ubuntu" />`
 
- you tube syntax on gitbook - might need to update.
  
  
- Add a linter for the image format





- Multi-line note - see GPS & Compass page below the table. 

- Redirect to /advanced_config/parameter_reference?id=GPS_1_CONFIG : note internal links will go to  https://hamishwillee.github.io/multidocsify_test/#/redir_repo/en/farhangnaderi/PX4-user_guide/pr-locosys-r1/advanced_config/parameter_reference?id=gps_1_config - ie they are linkified lower case. So we may want to look for the id and add a duplicate lower case.


Migration
- [ ] - SUMMARY paths have to be absolute for infrastructure to work (i.e. start with /)
- [ ] - Contribute and other pages that have conditional text.
