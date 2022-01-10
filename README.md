# CJSM Microsite - cjsm.justice.gov.uk

This is a website with information about CJSM, for users and organisation admins. For more about CJSM, see [CJSM Technical Architecture](https://docs.google.com/document/d/1X3l_v5e_gn2ywsYc1SxpgPlCr-Mq1o8VZq-YWTNplpI/edit#)

It is a static site, hosted on S3 with CloudFront caching. It is publicly accessible at: <https://cjsm.justice.gov.uk/>. The site has always been public, and contains nothing sensitive.

## History and decisions

* 2011/5 Site appears to be accessible at <http://cjsm.justice.gov.uk/> as captured by [Wayback Machine](https://web.archive.org/web/2020*/cjsm.justice.gov.uk)

* 2014/2 PHP site was flattened into a static site, re-hosted on S3+CloudFront, in the DSD AWS account 880656497252, bucket "cjsm.justice.gov.uk". The files were into copied into GitHub <https://github.com/ministryofjustice/CJSM-2014/> but without CI/CD that became out of date, and the repo was archived (some time before 2021/12). There was a contact form that POSTed to http://cjsm.dsd.io/contact/enquiries.php, which must have stopped working around then, when the PHP site was decommissioned.

* 2022/1 DR copied the S3 files to a fresh GitHub repo <https://github.com/ministryofjustice/cjsm>

## Deployment

This repo is served by GitHub Pages, at https://ministryofjustice.github.io/cjsm with a view to getting the domain name cjsm.justice.gov.uk pointing there.

## Domain names

DNS setup is in DSD account, Route53:

* cjsm.justice.gov.uk NS -> Route53
* cjsm.justice.gov.uk SOA -> Route53
* cjsm.justice.gov.uk A -> Cloudfront property
* www.cjsm.justice.gov.uk A -> Cloudfront property
* <hex>.cjsm.justice.gov.uk CNAME -> <hex> (ACM validation record)
* <hex>.www.cjsm.justice.gov.uk CNAME -> <hex> (ACM validation record)
