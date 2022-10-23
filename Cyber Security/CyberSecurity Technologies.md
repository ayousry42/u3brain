# CyberSecurity Tech
## Protection Components
### Network
>- Firewalls
>- WebApp Firewall
>- DMZ (Demilitarized zone)
>  1. Safe zone in network
>  2. isolated

#### Intrusion Detection
>- Traffic analysis
>- Detect unusual behavior
>  1. Anomaly
>     unusual time to be sending a lot of packets
>  2. Signature 
>     Sent from unknown sources
>  3. Protocols
>     http on  a mail server? fr fr?
>#### System Intrusion
>- File related attacks (file with unusual permissions)
>  Why exec word file? WHY!!?! exactly its a macro virus lolol
>
>#### Network Intrusion
>- DDOS 

#### Firewalls
>#### Types:
>##### Bastion Host
>> Using another computer to intercept traffic before it enters the network
>> Ex: Pihole to block ads
>##### Screened
>> DMZ that answers only to public requests while the rest of the network is left isolated from the private network
>##### Multi Layered
>>Both the above
>>Allows to divide the network even further based on the security goals of the org
>>Filters public requests first then goes to the nth firewall if it doesn't end up in the DMZ of the org
>#### Scopes:
>>- Packet filtering (part of router)
>>- Circuit level gateways (Bastion host)
>>- Application level (Browser can have https, FTP client for FTP etc, 25565 for mc)
>>- Multi layer (all of above)

## Honeypots
>### Low interaction (limited resource)
>>- Cannot be compromised completely 
>>- limited services
>>- Collect info like network probes and worm activities
>>- Ex: HoneyD, Specter and KFSensor
>### High interaction
>>- Fully compromised
>>- Simulate all services and apps
>>- Capture complete info about attack techniques and tools and intent of attack
>>- Ex: Decoy Server and Honeynets (More expensive obviously)


#CyberSecurity 

