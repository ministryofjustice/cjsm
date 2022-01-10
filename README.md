# CJSM Microsite - cjsm.justice.gov.uk

This is a website with information about CJSM, for users and organisation admins. For more about CJSM, see [CJSM Technical Architecture](https://docs.google.com/document/d/1X3l_v5e_gn2ywsYc1SxpgPlCr-Mq1o8VZq-YWTNplpI/edit#)

It is a static site, hosted on S3 with CloudFront caching. It is publicly accessible at: <https://cjsm.justice.gov.uk/>. The site has always been public, and contains nothing sensitive.

## History and decisions

* 2011/5 Site appears to be accessible at <http://cjsm.justice.gov.uk/> as captured by [Wayback Machine](https://web.archive.org/web/2020*/cjsm.justice.gov.uk)

* 2014/2 PHP site was flattened into a static site, re-hosted on S3+CloudFront, in the DSD AWS account 880656497252, bucket "cjsm.justice.gov.uk". The files were into copied into GitHub <https://github.com/ministryofjustice/CJSM-2014/> but without CI/CD that became out of date, and the repo was archived (some time before 2021/12)

* 2022/1 DR copied the S3 files to a fresh GitHub repo <https://github.com/ministryofjustice/cjsm>

## Deployment

Currently there is no CI/CD - this is currently just a copy of the files in S3, manually synced.

### Manual sync to S3

Setup manual sync:

1. Clone this repo:

       cd ~/
       git clone git@github.com:ministryofjustice/cjsm.git

Manual sync:

1. Log into AWS console for DSD account "MoJ Digital Services" 880656497252: https://moj.awsapps.com/start#/
2. Copy and paste the command-line credentials into your local terminal
3. Sync the files from your local clone:

       cd ~/cjsm/cjsm.justice.gov.uk
       aws s3 sync ./ s3://cjsm.justice.gov.uk
