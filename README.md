# CJSM Microsite - cjsm.justice.gov.uk

This is a website with information about CJSM, for users and organisation admins, including training materials for Webmail users. For more about CJSM, see [CJSM Wiki](https://dsdmoj.atlassian.net/wiki/spaces/CJSMliveservice/overview) and [CJSM Technical Architecture](https://docs.google.com/document/d/1X3l_v5e_gn2ywsYc1SxpgPlCr-Mq1o8VZq-YWTNplpI/edit#)

It is a static site, hosted on GitHub Pages. It is publicly accessible at: <https://cjsm.justice.gov.uk/>. The site has always been public, and contains nothing sensitive.

## Making changes

For friendly instructions for editing this site in GitHub, see: [Editing the microsite](https://dsdmoj.atlassian.net/wiki/spaces/CJSMliveservice/pages/3686236303/Technical+specification+of+CJSM#Editing-the-microsite)

Changes merged to the `main` branch get automatically deployed.

To review changes as they will look in a browser, if you have the files on your local disk you can point your browser at the file themselves. (Alternatively we could set-up a fork of this repo, with a 'test' branch that is deployed to GitHub Pages at say dev.cjsm.justice.gov.uk, that could be used for reviewing changes.)

## History and decisions

* 2011/5 Site appears to be accessible at <http://cjsm.justice.gov.uk/> as captured by [Wayback Machine](https://web.archive.org/web/2020*/cjsm.justice.gov.uk) - maybe this is the birth of the site

* 2014/2 PHP site was flattened into a static site, re-hosted on S3+CloudFront, in the DSD AWS account 880656497252, bucket "cjsm.justice.gov.uk". The files were into copied into GitHub <https://github.com/ministryofjustice/CJSM-2014/> but without CI/CD that became out of date, and the repo was archived (some time before 2021/12). There were two web forms for contacting CJSM that POSTed to http://cjsm.dsd.io/contact/enquiries.php, which must have stopped working around then, when the PHP site was decommissioned. Around this time the trainig videos were converted from Flash to MP4.

* 2022/1 DR copied the site's files from S3 into a fresh GitHub repo <https://github.com/ministryofjustice/cjsm> to make it more available to CJSM team for edit. [Hosted now on GitHub Pages](#hosting). The www.cjsm.justice.gov.uk domain no longer serves the site - instead it [redirects](#www-redirect) to cjsm.justice.gov.uk, using a Cloud Platform ingress rule.

## Hosting

This repo is served by GitHub Pages, at https://ministryofjustice.github.io/cjsm

Other ways were considered for hosting:

* S3 in Cloud Platform. This would be fine, but we'd have to setup and maintain the CI/CD deployment. Slightly more complex than GitHub Pages, which is pretty seamless and understood widely.

## www redirect

Until 2022, both cjsm.justice.gov.uk and www.cjsm.justice.gov.uk served this site. GitHub Pages only serves on one domain, so for simplicity we'll just pick one and redirect from the other. Google Search regards the former as canonical, it was decided to redirect from www.cjsm.justice.gov.uk to cjsm.justice.gov.uk.

The redirect is achieved with a Cloud Platform ingress annotation. This provides an 30X redirect, and CP keeps the TLS cert updated.

Other ways to redirect that were considered:

* S3 Static Site that serves a single HTML file that instructs the browser to redirect. However existing links and bookmarks to paths other than the root path would result in 404
* a S3 Static Site Hosting rule, to redirect to cjsm.justice.gov.uk. However it couldn't be used in this case because it redirected the user to the bucket of that name, rather than 30X redirect to that hostname.

### Redirect hosting

The redirect is hosted on [Cloud Platform](https://user-guide.cloud-platform.service.justice.gov.uk/) in namespace `cjsm-prod`, with `cjsm-dev` as the dev mirror.

The k8s resources are defined in [deploy](deploy/). These are deployed manually:

    kubectl apply -f dev/cert.yaml
    kubectl apply -f dev/ingress-redirect.yaml
    kubectl apply -f prod/cert.yaml
    kubectl apply -f prod/ingress-redirect.yaml

## DNS set-up

### cjsm.justice.gov.uk Hosted Zone (in DSD AWS account)

* cjsm.justice.gov.uk NS -> default for this hosted zone
* cjsm.justice.gov.uk SOA -> default for this hosted zone
* cjsm.justice.gov.uk A -> GitHub Pages servers that host the site
* www.cjsm.justice.gov.uk NS -> delegated to Hosted Zone in Cloud Platform - see [www redirect](#www-redirect)
* www.dev.cjsm.justice.gov.uk NS -> delegated to Hosted Zone in Cloud Platform - to test the redirect

(Since DSD account is deprecated, we should probably move this Hosted Zone into Cloud Platform too)

### www.cjsm.justice.gov.uk hosted zone (in Cloud Platform account, cjsm-prod namespace)

* www.cjsm.justice.gov.uk A -> ingress that 30X redirects to cjsm.justice.gov.uk

### www.dev.cjsm.justice.gov.uk hosted zone (in Cloud Platform account, cjsm-dev namespace)

* www.dev.cjsm.justice.gov.uk A -> ingress that redirects to dev.cjsm.justice.gov.uk - that destination doesn't exist - it was just for developing the redirect, but it could be useful to have a dev site in the future

## Old backups

There are old snapshots of this site, from 2015-2022/1 in S3 buckets in DSD account:

* cjsm.dsd.io - 2013/12 - PHP
* www.cjsm.justice.gov.uk - 2014/2
* cjsm.staging.dsd.io - 2021/6
* cjsm.justice.gov.uk - 2022/1

These could be cleared out at some point.
