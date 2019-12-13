# HackerNews XSS

In this project, we built an online web forum that allows users to post security related articles. Unfortunately, we built a site with a critical security flaw. The website did not sanitize the data received from users therefore, allowing our users to post whatever kind of content they want. Our goal with this paper is to examine how easily a Cross-Site Scripting Attack (XSS) can be mounted, and how dangerous they can be if not defended against.

The main focus of this paper is on stored XSS attacks. More generally, we will discuss reflected XSS attacks, and other classes of XSS attacks will be supplementary material to guide the reader. By the end of the paper, we will have illustrated feasible countermeasures for our stored XSS attack and other XSS attacks.