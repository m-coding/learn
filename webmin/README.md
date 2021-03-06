# Webmin Research

### What is Webmin?
Webmin is a web-based interface for system administration for Unix. Using any modern web browser, you can setup user accounts, Apache, DNS, file sharing and much more. Webmin removes the need to manually edit Unix configuration files like `/etc/passwd`, and lets you manage a system from the console or remotely.

### What is Usermin?
Usermin is a web-based interface for webmail, password changing, mail filters, fetchmail and much more. It is designed for use by regular non-root users on a Unix system, and limits them to tasks that they would be able to perform if logged in via SSH or at the console.

### What is Virtualmin?
It is a Webmin module for managing multiple virtual hosts through a single interface, like Plesk or Cpanel. It supports the creation and management of Apache virtual hosts, BIND DNS domains, MySQL databases, and mailboxes and aliases with Sendmail or Postfix. It makes use of the existing Webmin modules for these servers, and so should work with any existing system configuration, rather than needing it's own mail server, web server and so on.

Virtualmin can also create a Webmin user for each virtual server, who is restricted to managing just his domain and its files. Webmin's existing module access control features are used, and are set up automatically to limit the user appropriately. These server administrators can also manage the mailboxes and mail aliases in their domain, via a web interface that is part of the module.

### Documentation
http://doxfer.webmin.com/Webmin/Main_Page

### Themes
* [Finally](http://luizlopes.com/virtualmin/) – A Virtualmin Theme
* [Authentic](https://github.com/qooob/authentic-theme)<sup>[1](#f1)</sup> – Webmin/Usermin/Virtualmin/Cloudmin theme based on Bootstrap and Font Awesome
* [BWTheme](https://github.com/riccardonobile/Bootstrap3-Webmin-Theme) – A simple and beautiful theme for Webmin and Usermin made using Bootstrap and Font Awesome
* [All Third-Party Themes](http://www.webmin.com/cgi-bin/search_third.cgi?themes=1) – As listed on the official site

### Tutorials
##### Webmin Setup
* __2013-11-18__ [Webmin / Virtualmin - Tutorial. It's easy and free](http://www.webhostingtalk.com/showthread.php?t=1323148) @ webhostingtalk.com
* __2015-07__ [VPS Websites using free Webmin-Virtualmin](https://www.fullcircuit.com/blog/vps-websites-using-free-webmin-virtualmin) @ fullcircuit.com
* __2014-10__ [Setting Up Your Website/Email on Digital Ocean](http://surendran.info/setting-your-websiteemail-digital-ocean) @ surendran.info
* __2013-08-12__ [How To Install and Utilize VirtualMin on a VPS](https://www.digitalocean.com/community/tutorials/how-to-install-and-utilize-virtualmin-on-a-vps) @ digitalocean.com
* __2013-05-07__ [How To Install Webmin on an Ubuntu Cloud Server](https://www.digitalocean.com/community/tutorials/how-to-install-webmin-on-an-ubuntu-cloud-server) @ digitalocean.com
* __2015-01-19__ [How To Install Webmin with SSL on Ubuntu 14.04](https://www.digitalocean.com/community/tutorials/how-to-install-webmin-with-ssl-on-ubuntu-14-04) @ digitalocean.com
* __2013-12__ [Virtualmin security guide](https://www.lowendtalk.com/discussion/18133/virtualmin-security-guide-part-one-22-images) @ lowendtalk.com
* __2014-10-23__ [Sub-server vs Addon Domains](http://ilovevirtualmin.com/sub-server-vs-addon-domains/) @ ilovevirtualmin.com
* __2016-03-24__ [How to Install WordPress on Vultr VPS and ServerPilot](https://woorkup.com/install-wordpress-vultr-vps-serverpilot/) @ woorkup.com
* __2015-03-09__ [Ubuntu 14.04 and Virtualmin](https://www.jakweb.ch/blog/a/9/ubuntu-1404-and-virtualmin-part-1) @jakweb.ch
* __2012-04-16__ [Virtualmin Setup Guide](https://www.virtualmin.com/node/21899) @virtualmin.com
* __2012-05-28__ [Using VirtualMin with External DNS](https://www.virtualmin.com/node/22338) @virtualmin.com
* __2015-05-07__ [Setting Up A New VPS on Vultr With Webmin](http://steve-brown.id.au/2015/05/07/setting-up-a-new-vps-on-vultr-with-webmin/) @steve-brown.id.au
* __2008__ [Using Webmin to Add Users, Create MySQL Databases, and Other Tasks](http://linuxconsultant.info/tutorials/webmin-tutorial/webmin.html) @linuxconsultant.info

##### Server Setup
* __2014-10-13__ [Configuring a cloud-based secure multi-domain web and e-mail server](http://jkshay.com/configuring-cloud-based-secure-multi-domain-web-e-mail-server/3/) @ jkshay.com
* __2015-08-05__ [setting-up-mt-self-managed-vps.md](https://gist.github.com/cballenar/4c828fb0590e4e39052e) @cballenar gist
* __2013-07-06__ [Installing and securing LAMP, phpmyadmin, and webmin on new Ubuntu 12.04](http://www.guyzero.com/server-administration/installing-and-securing-lamp-phpmyadmin-and-webmin-on-new-ubuntu-12-04) @guyzero.com
* __2015-06-19__ [Your First 10 Minutes on a Server](https://github.com/codelittinc/incubator-resources/blob/master/best_practices/servers.md)

<b id="f1">1</b> This is now the default theme for Webmin. [↩](#f1)