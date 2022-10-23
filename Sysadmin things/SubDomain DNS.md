# Sub domain DNS management
## Manual method 
- [ ] **CNAME** DNS records for `fcds` on  `alexu.edu.eg` pointing to DNS nameserver(s)
- [ ] **A** DNS  record(s) on `fcds` domain zone for server cluster static IP
- AlexU has DNS nameservers WOOHOWOWOWOWOWOWOWOWO
## Manual method 2 (not preferred)
- [ ] Separate **A** records for each `fcds` subdomain and `fcds` itself

## Using DNS service provider (i.e cloudflare)
> Assuming there is no dedicated DNS nameservers for all edu.eg domains
> (there is)
- [ ] **CNAME** DNS records for `fcds` on  `alexu.edu.eg` pointing to Cloudflare DNS server(s)
- [ ] Granted access to Cloudflare dashboard to manage domains
- Not needed in Faculty environment (nameservers exist)