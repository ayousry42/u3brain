# Docker Containers
## What are they?
>- Really fast isolated environments 
>- Use your system's kernel
>- Less overhead than a VM 
>- Fast
>- Easily duplicated and deployed
>- Secure
>- No conflictions with rest of system

## Cool Advantages of containers
### Automation
>- Very easily automate deployment or setup of development environments
>- "It works on my machine" But every machine is your machine
>- Use the best Linux image for the right job without worrying about conflicts
## Networking
>- Hosting multiple web services that use same port
> 	 Easily achieved by mapping external (main host) machine ports to the same internal link of multiple containers (2 websites using https port 80) but each is mapped to 2 different ports on the actual machine `host.domain.com:portnumber`
>- Expose containers locally only
>	Some services are only needed to be accessed within the network and can be exposed instead
>- Connecting containers together
>	Can group containers into separate "networks" where only select services can interact together yet be isolated from the rest locally. For example you can make a network for a full stack webapp (Front end, backend , database) on one network so they can only interact together locally and have other unrelated services such as a VPN server on seperate from them
>



