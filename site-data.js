/* =====================================================================
   site-data.js
   Every word on the site lives in this file. Edit, save, push.
   No build step, no framework.

   Quick reference
   - draft: true  -> missing links show as dashed placeholders so you can
                     see where they go. Set to false before you share the
                     site; anything still missing is hidden instead.
   - Project status:  "active" | "building" | "planning" | "shipped"
   - Roadmap status:  "reached" | "current" | "progress" | "next"
                      | "planned" | "destination"
   - Wrap words in *asterisks* to color them with the accent.
   - Hide a project without deleting it: add  hide: true
   ===================================================================== */

window.SITE = {
  draft: true,
  updated: "Nov 2026",

  person: {
    name: "Matt Pourteymaur",
    initials: "MP",
    handle: "mattpourtey",
    location: "Las Vegas, NV",
    focus: "IT infrastructure",
    photo: "headshot.jpg", // headshot.jpg" (square crop works best)
    headline:
      "IT support technician in Las Vegas, building toward *data center and network engineering*.",
    intro:
      "I support end users, hardware, and network equipment across multiple sites. After hours I run a two-node Proxmox homelab, study for the CCNA, and turn what I learn into working systems."
  },

  links: {
   // resume: "",   // e.g. "assets/Matt-Pourteymaur-Resume.pdf"
    linkedin: "https://www.linkedin.com/in/mattpourtey/", // e.g. "https://www.linkedin.com/in/your-handle"
    github: "https://github.com/MattPourtey",
    email: "",    // a professional address, e.g. matt@mattpourtey.com
    source: "https://github.com/MattPourtey/my-portfolio"
  },

  // Hero terminal card
  terminal: [
    { cmd: "whoami", out: "matt pourteymaur" },
    { cmd: "cat role.txt", out: "IT Support Technician · Las Vegas" },
    { cmd: "ls certs/", out: "a+  network+  security+  ccna.partial" },
    { cmd: "ping -c1 next-hop", out: "data center & network ops: *reachable*" }
  ],

  // "Now" strip under the hero
  now: [
    { label: "Studying", text: "CCNA: routing, switching, and subnetting" },
    { label: "Building", text: "A Wazuh SIEM lab and an always-on Nextcloud" },
    { label: "Exploring", text: "Frigate NVR and face recognition on a Pi camera" }
  ],

  projects: [
    {
      title: "Homelab: two-node Proxmox",
      status: "active",
      category: "Infrastructure",
      featured: true,
      summary:
        "My test bench for everything I want to run in production someday. Two Proxmox nodes on a managed PoE+ switch, with containers, monitoring, and remote access over a Tailscale tailnet.",
      highlights: [
        "Prometheus and Grafana dashboards for node and service health",
        "Offsite replication with GPG-encrypted backups",
        "DHCP reservations and a written network manifest for every device",
        "Nodes managed over SSH with key-based auth"
      ],
      next: "Segment the lab into VLANs on the HPE switch",
      stack: ["Proxmox VE", "Docker", "Portainer", "LXC", "Prometheus", "Grafana", "Tailscale", "Pi-hole"],
      links: {},
      diagram: {
        label: "Tailscale tailnet",
        note: "remote access to every node",
        edge: { name: "ISP gateway", sub: "DHCP reservations" },
        core: { name: "HPE OfficeConnect 1820", sub: "24-port PoE+ managed switch" },
        nodes: [
          { name: "Dell OptiPlex 3080", sub: "Proxmox · always-on · 32 GB", items: ["Immich", "Pi-hole (LXC)", "Kali Linux VM", "Nextcloud (moving here)"] },
          { name: "HPE DL380 G7", sub: "Proxmox · on-demand", items: ["Heavy lab workloads", "Powered up as needed"] },
          { name: "Raspberry Pi 3B+", sub: "Edge · camera", items: ["Front-door stream", "Feeds Frigate NVR"] }
        ]
      }
    },
    {
      title: "Self-hosted cloud: Nextcloud + Immich",
      status: "building",
      category: "Infrastructure",
      summary:
        "Replacing paid cloud storage with my own. Immich already backs up photos from my phone. Nextcloud ran on the DL380 G7, but that server draws too much power to leave on 24/7, so it's moving to the low-power OptiPlex.",
      next: "Add a 1 TB SSD for photo storage",
      stack: ["Nextcloud", "Immich", "Docker", "Proxmox VE"],
      links: {}
    },
    {
      title: "SIEM lab with Wazuh",
      status: "building",
      category: "Security",
      summary:
        "A security monitoring lab: Wazuh collects and analyzes logs from my lab hosts, and a Kali Linux VM gives me something realistic to test against.",
      next: "Get agents reporting from every lab node",
      stack: ["Wazuh", "Kali Linux", "Proxmox VE"],
      links: {}
    },
    {
      title: "Front-door camera with face recognition",
      status: "building",
      category: "Security",
      summary:
        "A Raspberry Pi 3B+ streams the front-door camera to Frigate NVR on the homelab, which handles object detection and face recognition locally. No cloud subscription.",
      next: "Finish face recognition setup in Frigate",
      stack: ["Raspberry Pi", "Frigate", "Docker"],
      links: {}
    },
    {
      title: "Recruiter inbox tracker",
      status: "building",
      category: "Automation",
      summary:
        "An n8n workflow that picks recruiter emails out of my inbox and logs the company, role, and contact to a Google Sheet, so no lead slips through.",
      next: "",
      stack: ["n8n", "Gmail", "Google Sheets"],
      links: {}
    },
    {
      //title: "KinWire IT",
//status: "planning",
   //   category: "Business",
     // summary:
     //   "A small IT services business I'm planning for independent Las Vegas restaurants, bars, and food trucks, built around PCI-minded network segmentation and dependable POS support.",
     // next: "Business plan sessions with a SCORE mentor",
     // stack: ["Networking", "PCI DSS", "POS"],
   //   links: {}
    },
    {
  //    title: "Family history timeline",
//status: "active",
  //    category: "Web",
   //   summary:
        "An interactive single-page timeline tracing my family across nine generations, built from family records and historical research.",
  //    next: "",
   //   stack: ["HTML", "CSS", "JavaScript"],
//      links: {}
    }
  ],

  roadmap: [
    {
      host: "field.low-voltage",
      title: "Low-voltage field technician",
      detail: "Cable runs, testing, and field installs. My first hands-on work with physical infrastructure.",
      status: "reached"
    },
    {
      host: "cert.comptia",
      title: "CompTIA A+, Network+, Security+",
      detail: "The foundation: hardware, networking, and security fundamentals. Security+ passed October 2026.",
      status: "reached"
    },
    {
      host: "it-support.las-vegas",
      title: "IT Support Specialist",
      detail: "Supporting end users, hardware, and network equipment across multiple sites, from deployment and configuration to ticket resolution.",
      status: "current"
    },
    {
      host: "cert.ccna",
      title: "Cisco CCNA",
      detail: "Routing, switching, and subnetting at the depth network teams expect.",
      status: "progress"
    }
  ],

  credentials: [
    { badge: "S+", name: "CompTIA Security+", issuer: "CompTIA", status: "earned", date: "Oct 2026", verify: "" },
    { badge: "N+", name: "CompTIA Network+", issuer: "CompTIA", status: "earned", date: "", verify: "" },
    { badge: "A+", name: "CompTIA A+", issuer: "CompTIA", status: "earned", date: "", verify: "" },
    { badge: "CCNA", name: "Cisco CCNA", issuer: "Cisco", status: "progress", date: "Studying now" },
    { badge: "AAS", name: "AAS, Networking & Cybersecurity", issuer: "College of Southern Nevada", status: "progress", date: "In progress" }
  ],

  skills: [
    { group: "Networking", items: ["TCP/IP", "Subnetting", "VLANs", "Managed switching", "DHCP & DNS", "Tailscale"] },
    { group: "Systems & virtualization", items: ["Proxmox VE", "Linux", "Windows", "Docker", "LXC", "Portainer"] },
    { group: "Security", items: ["Wazuh SIEM", "Kali Linux", "Network segmentation", "GPG encryption", "Pi-hole"] },
    { group: "Monitoring & automation", items: ["Prometheus", "Grafana", "n8n"] },
    { group: "Support & operations", items: ["POS hardware", "Agilysys InfoGenesis", "ServiceNow", "Hardware deployment"] }
  ]
};
