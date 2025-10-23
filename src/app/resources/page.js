'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import Image from 'next/image';
import Switch from "@/components/ui/sky-toggle";
import MobileSidebar from "@/components/MobileSidebar";
import DeadlineTimer from "@/components/DeadlineTimer";
import Footer from "@/components/Footer";
import Confetti from 'react-confetti';

const coursesData = [
  {
    "course_name": "The Basics of Google Cloud Compute: Challenge Lab",
    "course_page_link": "https://www.cloudskillsboost.google/course_templates/754",
    "labs": [
      {
        "lab_name": "Creating a Virtual Machine",
        "start_lab_link": "https://www.cloudskillsboost.google/focuses/3563?parent=catalog",
        "solution_link": "https://youtu.be/oUnQLeuEDs8?si=AOBSgVRYknbJLoZi"
      },
      {
        "lab_name": "Creating a Persistent Disk",
        "start_lab_link": "https://www.cloudskillsboost.google/course_templates/754/labs/584201",
        "solution_link": "https://youtu.be/oUnQLeuEDs8?si=AOBSgVRYknbJLoZi"
      },
      {
        "lab_name": "Hosting a Web App on Google Cloud Using Compute Engine",
        "start_lab_link": "https://www.cloudskillsboost.google/course_templates/754/labs/584202",
        "solution_link": "https://youtu.be/um0RpF0k070?si=TN5Lybcdg7PfqX9k"
      },
      {
        "lab_name": "The Basics of Google Cloud Compute: Challenge Lab (Required)",
        "start_lab_link": "https://www.cloudskillsboost.google/course_templates/754/labs/584203",
        "solution_link": "https://youtu.be/1F5hAre_YOU?si=NCrAC8Rs8yKlPiET"
      }
    ]
  },
  {
    "course_name": "Get Started with Cloud Storage",
    "course_page_link": "https://www.cloudskillsboost.google/course_templates/725",
    "labs": [
      {
        "lab_name": "APIs Explorer: Cloud Storage",
        "start_lab_link": "https://www.cloudskillsboost.google/course_templates/725/labs/589886",
        "solution_link": "https://youtu.be/E2ztBJM9ycY?si=Yc8mGVCUFpJF83Zx"
      },
      {
        "lab_name": "Cloud Storage: Qwik Start - CLI/SDK",
        "start_lab_link": "https://www.cloudskillsboost.google/course_templates/725/labs/589887",
        "solution_link": "https://youtu.be/nnDHTQKhhxY?si=WcoyOOSuGfPa7ulO"
      },
      {
        "lab_name": "Google Cloud Storage - Bucket Lock",
        "start_lab_link": "https://www.cloudskillsboost.google/course_templates/725/labs/589888",
        "solution_link": "https://youtu.be/ROLigBsAx3A?si=6udTPpSAJzljodL3"
      },
      {
        "lab_name": "Get Started with Cloud Storage: Challenge Lab (Required)",
        "start_lab_link": "https://www.cloudskillsboost.google/course_templates/725/labs/589888",
        "solution_link": "https://youtu.be/X6DNbZbzKuA?si=gKC-cVtHn_nV8HfD"
      }
    ]
  },
  {
    "course_name": "Get Started with Pub/Sub",
    "course_page_link": "https://www.cloudskillsboost.google/course_templates/728",
    "labs": [
      {
        "lab_name": "Pub/Sub: Qwik Start - Console",
        "start_lab_link": "https://www.cloudskillsboost.google/course_templates/728/labs/594563",
        "solution_link": "https://www.youtube.com/watch?v=84tXuAKLZLY"
      },
      {
        "lab_name": "Cloud Scheduler: Qwik Start",
        "start_lab_link": "https://www.cloudskillsboost.google/course_templates/728/labs/594564",
        "solution_link": "https://www.youtube.com/watch?v=7xwjJYiRzcg"
      },
      {
        "lab_name": "Get Started with Pub/Sub: Challenge Lab (Required)",
        "start_lab_link": "https://www.cloudskillsboost.google/course_templates/728/labs/594565",
        "solution_link": "https://www.youtube.com/watch?v=RDLyWHXnr0s"
      }
    ]
  },
  {
    "course_name": "Get Started with API Gateway",
    "course_page_link": "https://www.cloudskillsboost.google/course_templates/662",
    "labs": [
      {
        "lab_name": "API Gateway: Qwik Start",
        "start_lab_link": "https://www.cloudskillsboost.google/course_templates/662/labs/592574",
        "solution_link": "https://youtu.be/5Ae2ftnjJfM?si=JAvxe5D1b9kTXU9k"
      },
      {
        "lab_name": "Pub/Sub: Qwik Start - Console",
        "start_lab_link": "https://www.cloudskillsboost.google/course_templates/662/labs/592575",
        "solution_link": "https://youtu.be/84tXuAKLZLY?si=aEFdS-NXDZpEJgJD"
      },
      {
        "lab_name": "Cloud Functions Qwik Start - Console",
        "start_lab_link": "https://www.cloudskillsboost.google/course_templates/662/labs/592576",
        "solution_link": "https://youtu.be/-8vxVRA2ruk?si=0se4gm0KCFMjCGZl"
      },
      {
        "lab_name": "Getting Started with API Gateway: Challenge Lab (Required)",
        "start_lab_link": "https://www.cloudskillsboost.google/course_templates/662/labs/592577",
        "solution_link": "https://youtu.be/iWRh0xCKwRQ?si=rYr6iVMdphlLo2dx"
      }

    ]
  },
  {
    "course_name": "Get Started with Looker",
    "course_page_link": "https://www.cloudskillsboost.google/course_templates/647",
    "labs": [
      {
        "lab_name": "Looker Studio: Qwik Start",
        "start_lab_link": "https://www.cloudskillsboost.google/course_templates/647/labs/461640",
        "solution_link": "https://youtu.be/G9jNga-up70?si=rGWMNfQ4OZKtVBev"
      },
      {
        "lab_name": "Looker Data Explorer - Qwik Start",
        "start_lab_link": "https://www.cloudskillsboost.google/course_templates/647/labs/461641",
        "solution_link": "https://youtu.be/_mxceD2TSMQ?si=PiZytTMrwMsOb-Ck"
      },
      {
        "lab_name": "Looker Developer: Qwik Start",
        "start_lab_link": "https://www.cloudskillsboost.google/course_templates/647/labs/461642",
        "solution_link": "https://youtu.be/wNgUf8-XfLM?si=dj6YMrz8DH56puVA"
      },
      {
        "lab_name": "Get Started with Looker: Challenge Lab (Required)",
        "start_lab_link": "https://www.cloudskillsboost.google/course_templates/647/labs/461643",
        "solution_link": "https://youtu.be/iZPo_KTy1RE?si=fEmCBI0cdD9yj9ib"
      }
    ]
  },
  {
    "course_name": "Get Started with Dataplex",
    "course_page_link": "https://www.cloudskillsboost.google/course_templates/726",
    "labs": [
      {
        "lab_name": "Dataplex: Qwik Start - Console",
        "start_lab_link": "https://www.cloudskillsboost.google/course_templates/726/labs/461568",
        "solution_link": "https://youtu.be/yDQfs8fNBgM?si=dxLtHaqLEAnK0cNE"
      },
      {
        "lab_name": "Dataplex: Qwik Start - Command Line",
        "start_lab_link": "https://www.cloudskillsboost.google/course_templates/726/labs/461569",
        "solution_link": "https://youtu.be/GVKNYbTUDIU?si=ScRU2-zka352iq_Q"
      },
      {
        "lab_name": "Tagging Dataplex Asset",
        "start_lab_link": "https://www.cloudskillsboost.google/course_templates/726/labs/461570",
        "solution_link": "https://youtu.be/s-3nNkkocdo?si=REi-XV7xT45NPWHs"
      },
      {
        "lab_name": "Get Started with Dataplex: Challenge Lab (Required)",
        "start_lab_link": "https://www.cloudskillsboost.google/course_templates/726/labs/461571",
        "solution_link": "https://www.youtube.com/watch?v=2mrIwJpuEGM"
      }
    ]
  },
  {
    "course_name": "Get Started with Google Workspace Tools: Challenge Lab",
    "course_page_link": "https://www.cloudskillsboost.google/course_templates/676",
    "labs": [
      {
        "lab_name": "Gmail: Getting Started",
        "start_lab_link": "https://www.cloudskillsboost.google/course_templates/676/labs/476311",
        "solution_link": "https://youtu.be/saL_ibySVx4?si=A4FOx4JEwHwLqNQG"
      },
      {
        "lab_name": "Google Calendar: Getting Started",
        "start_lab_link": "https://www.cloudskillsboost.google/course_templates/676/labs/476312",
        "solution_link": "https://youtu.be/J8f2jCSZZ78?si=HKQYtFCl4rzvOP0v"
      },
      {
        "lab_name": "Google Meet: Getting Started",
        "start_lab_link": "https://www.cloudskillsboost.google/course_templates/676/labs/476313",
        "solution_link": "https://youtu.be/NT4f67Qxkb4?si=LLy3kDqBRRkH6g-o"
      },
      {
        "lab_name": "Google Drive: Getting Started",
        "start_lab_link": "https://www.cloudskillsboost.google/course_templates/676/labs/476314",
        "solution_link": "https://youtu.be/rDmB4_RrOXs?si=28SCSdbEB3UJHN2b"
      },
      {
        "lab_name": "Google Sheets: Getting Started",
        "start_lab_link": "https://www.cloudskillsboost.google/course_templates/676/labs/476315",
        "solution_link": "https://youtu.be/VOxyLjNC_4Y?si=-Emuux7ElceB2cdR"
      },
      {
        "lab_name": "Google AppSheet: Getting Started",
        "start_lab_link": "https://www.cloudskillsboost.google/course_templates/676/labs/476316",
        "solution_link": "https://youtu.be/GHrGaNce6WE?si=xz8ew-v9nv6ySnXT"
      },
      {
        "lab_name": "Get Started with Google Workspace Tools: Challenge Lab (Required)",
        "start_lab_link": "https://www.cloudskillsboost.google/course_templates/676/labs/476317",
        "solution_link": "https://youtu.be/t93hJjIYUWo?si=w4V2rYb1hXF_Br2r"
      }
    ]
  },
  {
    "course_name": "App Building with Appsheet",
    "course_page_link": "https://www.cloudskillsboost.google/course_templates/635",
    "labs": [
      {
        "lab_name": "Google AppSheet: Getting Started",
        "start_lab_link": "https://www.cloudskillsboost.google/course_templates/635/labs/586897",
        "solution_link": "https://youtu.be/ZGMsodoXp-w?si=q3ZEeMk1HZjVxYxo"
      },
      {
        "lab_name": "Connect and Configure Data for your AppSheet App",
        "start_lab_link": "https://www.cloudskillsboost.google/course_templates/635/labs/586898",
        "solution_link": "https://youtu.be/G9BYYBIjFfg?si=yCzudG4g6uRAfTFe"
      },
      {
        "lab_name": "Publish your AppSheet App",
        "start_lab_link": "https://www.cloudskillsboost.google/course_templates/635/labs/586899",
        "solution_link": "https://youtu.be/SQXAjjBPn3A?si=NBrMALlIrSQSYqSD"
      },
      {
        "lab_name": "App Building with AppSheet: Challenge Lab (Required)",
        "start_lab_link": "https://www.cloudskillsboost.google/course_templates/635/labs/586900",
        "solution_link": "https://youtu.be/dDk2luM4EzI?si=Ej3wDo4-MjksHzsU"
      }
    ]
  },
  {
    "course_name": "Develop with Apps Script and AppSheet",
    "course_page_link": "https://www.cloudskillsboost.google/course_templates/715",
    "labs": [
      {
        "lab_name": "Develop No-Code Chat Apps with AppSheet",
        "start_lab_link": "https://www.cloudskillsboost.google/course_templates/715/labs/591610",
        "solution_link": "https://youtu.be/O2IUvuWqnjs?si=c6wVmVPf3J-UtV-T"
      },
      {
        "lab_name": "Introduction to Google Chat Bots with Apps Script",
        "start_lab_link": "https://www.cloudskillsboost.google/course_templates/715/labs/591611",
        "solution_link": "https://youtu.be/NuMwtkkdgPU?si=RJ5tl2DjOY6iUaBN"
      },
      {
        "lab_name": "Google Apps Script: Access Google Sheets, Maps & Gmail in 4 Lines of Code",
        "start_lab_link": "https://www.cloudskillsboost.google/course_templates/715/labs/591612",
        "solution_link": "https://youtu.be/afvGRQGdDjg?si=tqjhiUUzmzESJvl9"
      },
      {
        "lab_name": "Develop with Apps Script and AppSheet: Challenge Lab (Required)",
        "start_lab_link": "https://www.cloudskillsboost.google/course_templates/715/labs/591613",
        "solution_link": "https://youtu.be/CUDgunty_vU?si=nZVrcLN9UOoSb8yy"
      }
    ]
  },
  {
    "course_name": "Build a Website on Google Cloud",
    "course_page_link": "https://www.cloudskillsboost.google/course_templates/638",
    "labs": [
      {
        "lab_name": "Deploy Your Website on Cloud Run",
        "start_lab_link": "https://www.cloudskillsboost.google/course_templates/638/labs/592820",
        "solution_link": "https://youtu.be/QDK0Z_dCyDc?si=vzTSSLmZBdZCDiAG"
      },
      {
        "lab_name": "Host a Web App on Google Cloud Using Compute Engine",
        "start_lab_link": "https://www.cloudskillsboost.google/course_templates/638/labs/592822",
        "solution_link": "https://youtu.be/xCN4_jEAlhQ?si=lFcd4TCG3TJSaIyx"
      },
      {
        "lab_name": "Deploy, Scale, and Update Your Website on Google Kubernetes Engine",
        "start_lab_link": "https://www.cloudskillsboost.google/course_templates/638/labs/592823",
        "solution_link": "https://youtu.be/wUY1HeO4EOo?si=LGEiFaqYMjIN_QFF"
      },
      {
        "lab_name": "Migrating a Monolithic Website to Microservices on Google Kubernetes Engine",
        "start_lab_link": "https://www.cloudskillsboost.google/course_templates/638/labs/592824",
        "solution_link": "https://youtu.be/36WC7jipPIo?si=HlknK9VI8024yL0f"
      },
      {
        "lab_name": "Build a Website on Google Cloud: Challenge Lab (Required)",
        "start_lab_link": "https://www.cloudskillsboost.google/course_templates/638/labs/592826",
        "solution_link": "https://youtu.be/3NUOcaJ_iJs?si=FpZqSEb8m8uOJRuf"
      }
    ]
  },
  {
    "course_name": "Set Up a Google Cloud Network",
    "course_page_link": "https://www.cloudskillsboost.google/course_templates/641",
    "labs": [
      {
        "lab_name": "Networking 101",
        "start_lab_link": "https://www.cloudskillsboost.google/course_templates/641/labs/594501",
        "solution_link": "https://youtu.be/su_bKowi7o8?si=fiH4IAAh3XR66CUT"
      },
      {
        "lab_name": "Create a Custom Network and Apply Firewall Rules",
        "start_lab_link": "https://www.cloudskillsboost.google/course_templates/641/labs/594502",
        "solution_link": "https://youtu.be/Lz6WptOwb68?si=pye4zBfgqnIxwfp3"
      },
      {
        "lab_name": "Test Network Latency Between VMs",
        "start_lab_link": "https://www.cloudskillsboost.google/course_templates/641/labs/594503",
        "solution_link": "https://youtu.be/vIRgtWCsTfM?si=gncFppTky86nYpHz"
      },
      {
        "lab_name": "Set Up a Google Cloud Network: Challenge Lab (Required)",
        "start_lab_link": "https://www.cloudskillsboost.google/course_templates/641/labs/594504",
        "solution_link": "https://youtu.be/9bYV6Evyvn8?si=0trkOv7aAzNmlJaW"
      }
    ]
  },
  {
    "course_name": "Store, Process, and Manage Data on Google Cloud - Console",
    "course_page_link": "https://www.cloudskillsboost.google/course_templates/658",
    "labs": [
      {
        "lab_name": "Cloud Storage: Qwik Start - Cloud Console",
        "start_lab_link": "https://www.cloudskillsboost.google/course_templates/658/labs/592591",
        "solution_link": "https://youtu.be/pRv0jBGJd9w?si=WXbIb4uckgxuFCvw"
      },
      {
        "lab_name": "Cloud Run Functions: Qwik Start - Console",
        "start_lab_link": "https://www.cloudskillsboost.google/course_templates/658/labs/592592",
        "solution_link": "https://youtu.be/IBHFrTLcTY0?si=44ExRETevM24jXnP"
      },
      {
        "lab_name": "Pub/Sub: Qwik Start - Console",
        "start_lab_link": "https://www.cloudskillsboost.google/course_templates/658/labs/592593",
        "solution_link": "https://www.youtube.com/watch?v=r8pnC0kwt-8?si=oW3qyhCNs432GTDf"
      },
      {
        "lab_name": "Store, Process, and Manage Data on Google Cloud: Challenge Lab (Required)",
        "start_lab_link": "https://www.cloudskillsboost.google/course_templates/658/labs/592594",
        "solution_link": "https://youtu.be/fRMJI5ATs2s?si=NHaCEnBi8KTa6s-U"
      }
    ]
  },
  {
    "course_name": "Cloud Functions: 3 Ways",
    "course_page_link": "https://www.cloudskillsboost.google/course_templates/696",
    "labs": [
      {
        "lab_name": "Cloud Functions: Qwik Start - Console",
        "start_lab_link": "https://www.cloudskillsboost.google/course_templates/696/labs/461616",
        "solution_link": "https://youtu.be/-8vxVRA2ruk?si=At7WArAJXY33eKQ1"
      },
      {
        "lab_name": "Cloud Functions: Qwik Start - Command Line",
        "start_lab_link": "https://www.cloudskillsboost.google/course_templates/696/labs/461617",
        "solution_link": "https://youtu.be/DzQ8i7t7zyY?si=wuhdwpMdjMcx3MBQ"
      },
      {
        "lab_name": "Cloud Functions 2nd Gen: Qwik Start",
        "start_lab_link": "https://www.cloudskillsboost.google/course_templates/696/labs/461618",
        "solution_link": "https://youtu.be/WWFzCrPHsCk?si=rP5fLJNRIVC2i9U8"
      },
      {
        "lab_name": "Cloud Functions: 3 Ways: Challenge Lab (Required)",
        "start_lab_link": "https://www.cloudskillsboost.google/course_templates/696/labs/461619",
        "solution_link": "https://youtu.be/fPVslkWDTGg?si=QoaQ75N8TWxvV2mQ"
      }
    ]
  },
  {
    "course_name": "App Engine: 3 Ways: Challenge Lab",
    "course_page_link": "https://www.cloudskillsboost.google/course_templates/671",
    "labs": [
      {
        "lab_name": "App Engine: Qwik Start - Python",
        "start_lab_link": "https://www.cloudskillsboost.google/course_templates/671/labs/461532",
        "solution_link": "https://youtu.be/IK1FedYS4RU?si=VIzJJVJdc9LFLCNW"
      },
      {
        "lab_name": "App Engine: Qwik Start - Go",
        "start_lab_link": "https://www.cloudskillsboost.google/course_templates/671/labs/461533",
        "solution_link": "https://youtu.be/3cVxYis4Hj8?si=oeIKSnsw3pSqk3J7"
      },
      {
        "lab_name": "App Engine: Qwik Start - PHP",
        "start_lab_link": "https://www.cloudskillsboost.google/course_templates/671/labs/461534",
        "solution_link": "https://youtu.be/sxlXdG7sLy4?si=PMuHP9CgkafxYidt"
      },
      {
        "lab_name": "App Engine: 3 Ways: Challenge Lab (Required)",
        "start_lab_link": "https://www.cloudskillsboost.google/course_templates/671/labs/461535",
        "solution_link": "https://youtu.be/rZGeGBXDdfM?si=0bQ_HR0hpUimeRMi"
      }
    ]
  },
  {
    "course_name": "Cloud Speech API 3 Ways: Challenge Lab",
    "course_page_link": "https://www.cloudskillsboost.google/course_templates/700",
    "labs": [
      {
        "lab_name": "It Speaks! Create Synthetic Speech Using Text-to-Speech",
        "start_lab_link": "https://www.cloudskillsboost.google/course_templates/700/labs/461580",
        "solution_link": "https://youtu.be/ZrC1bktIC9I?si=QwvMLUbfZ-qBbQX8"
      },
      {
        "lab_name": "Translate Text with the Cloud Translation API",
        "start_lab_link": "https://www.cloudskillsboost.google/course_templates/700/labs/461581",
        "solution_link": "https://youtu.be/QIyAKsou5CM?si=oIB9qy3YYYflzYh-"
      },
      {
        "lab_name": "Speech to Text Transcription with the Cloud Speech API",
        "start_lab_link": "https://www.cloudskillsboost.google/course_templates/700/labs/461582",
        "solution_link": "https://youtu.be/Hs4Gpdcb5WI?si=-IpuGOghQ0gl29yn"
      },
      {
        "lab_name": "Cloud Speech API 3 Ways: Challenge Lab (Required)",
        "start_lab_link": "https://www.cloudskillsboost.google/course_templates/700/labs/461583",
        "solution_link": "https://youtu.be/iLn4-TvJXno?si=JIMx7pvPNuYA-9ee"
      }
    ]
  },
  {
    "course_name": "Monitoring in Google Cloud: Challenge Lab",
    "course_page_link": "https://www.cloudskillsboost.google/course_templates/747",
    "labs": [
      {
        "lab_name": "Cloud Monitoring: Qwik Start",
        "start_lab_link": "https://www.cloudskillsboost.google/course_templates/747/labs/461644",
        "solution_link": "https://youtu.be/TO6FqSk_Or8?si=XlYyorRaOqLWAlY6"
      },
      {
        "lab_name": "Monitoring and Logging for Cloud Functions",
        "start_lab_link": "https://www.cloudskillsboost.google/course_templates/747/labs/461645",
        "solution_link": "https://youtu.be/zDM2IzpCedM?si=GRJ0yybXqrU9fbDx"
      },
      {
        "lab_name": "Monitor an Apache Web Server using Ops Agent",
        "start_lab_link": "https://www.cloudskillsboost.google/course_templates/747/labs/461646",
        "solution_link": "https://youtu.be/3vNqet2BGr4?si=RFjSaWPz8xht2rBx"
      },
      {
        "lab_name": "Monitoring in Google Cloud: Challenge Lab (Required)",
        "start_lab_link": "https://www.cloudskillsboost.google/course_templates/747/labs/461647",
        "solution_link": "https://youtu.be/cZJn_C_Ry4w?si=tGJNf33M5Y1QJM7y"
      }
    ]
  },
  {
    "course_name": "Analyze Speech and Language with Google APIs",
    "course_page_link": "https://www.cloudskillsboost.google/course_templates/634",
    "labs": [
      {
        "lab_name": "Cloud Natural Language API: Qwik Start",
        "start_lab_link": "https://www.cloudskillsboost.google/course_templates/634/labs/586893",
        "solution_link": "https://youtu.be/gdTxNBBTrQE?si=7Y7Q9ibQvqmuSwKT"
      },
      {
        "lab_name": "Speech-to-Text API: Qwik Start",
        "start_lab_link": "https://www.cloudskillsboost.google/course_templates/634/labs/586894",
        "solution_link": "https://youtu.be/0OOpG5_lXuM?si=ue7I-i1qram7F0hZ"
      },
      {
        "lab_name": "Entity and Sentiment Analysis with the Natural Language API",
        "start_lab_link": "https://www.cloudskillsboost.google/course_templates/634/labs/586895",
        "solution_link": "https://youtu.be/XsEiolKVH2U?si=TAnFhNcd9tFnafit"
      },
      {
        "lab_name": "Analyze Speech & Language with Google APIs: Challenge Lab (Required)",
        "start_lab_link": "https://www.cloudskillsboost.google/course_templates/634/labs/586896",
        "solution_link": "https://youtu.be/75FktGg2fSo?si=DH9do3knbGaJlgNW"
      }
    ]
  },
  {
    "course_name": "Prompt Design in Vertex AI",
    "course_page_link": "https://www.cloudskillsboost.google/course_templates/976",
    "labs": [
      {
        "lab_name": "Generative AI with Vertex AI: Prompt Design",
        "start_lab_link": "https://www.cloudskillsboost.google/course_templates/976/labs/489805",
        "solution_link": "https://www.youtube.com/watch?v=h8wTc1lBQ7g"
      },
      {
        "lab_name": "Get Started with Vertex AI Studio",
        "start_lab_link": "https://www.cloudskillsboost.google/course_templates/976/labs/489806",
        "solution_link": "https://www.youtube.com/watch?v=e4MpONRtHZw&list=PL5aOhqv5LVIpGYa_pR6PYmUk2kwd60xWC&index=4"
      },
      {
        "lab_name": "Getting Started with the Vertex AI Gemini API and Python SDK",
        "start_lab_link": "https://www.cloudskillsboost.google/course_templates/976/labs/489807",
        "solution_link": "https://www.youtube.com/watch?v=6DMza4gk-AM&list=PL5aOhqv5LVIpGYa_pR6PYmUk2kwd60xWC&index=6"
      },
      {
        "lab_name": "Prompt Design in Vertex AI: Challenge Lab (Required)",
        "start_lab_link": "https://www.cloudskillsboost.google/course_templates/976/labs/489808",
        "solution_link": "https://www.youtube.com/watch?v=GZgFW6ZwEG4&list=PL5aOhqv5LVIpGYa_pR6PYmUk2kwd60xWC&index=3"
      }
    ]
  },
  {
    "course_name": "Develop GenAI Apps with Gemini and Streamlit",
    "course_page_link": "https://www.cloudskillsboost.google/course_templates/978",
    "labs": [
      {
        "lab_name": "Getting Started with the Vertex AI Gemini API with cURL",
        "start_lab_link": "https://www.cloudskillsboost.google/course_templates/978/labs/592569",
        "solution_link": "https://www.youtube.com/watch?v=FE40dzAof3M&list=PLI0vR7P4HGfGakLvUkw_1YIgHgwGFSvqK"
      },
      {
        "lab_name": "Introduction to Function Calling with Gemini",
        "start_lab_link": "https://www.cloudskillsboost.google/course_templates/978/labs/592570",
        "solution_link": "https://www.youtube.com/watch?v=Be5EKZS7O7c&list=PLI0vR7P4HGfGakLvUkw_1YIgHgwGFSvqK&index=66"
      },
      {
        "lab_name": "Getting Started with the Vertex AI Gemini API and Python SDK",
        "start_lab_link": "https://www.cloudskillsboost.google/course_templates/978/labs/488166",
        "solution_link": "https://www.youtube.com/watch?v=6OrU5g-EVtE"
      },
      {
        "lab_name": "Deploy a Streamlit App Integrated with Gemini Pro on Cloud Run",
        "start_lab_link": "https://www.cloudskillsboost.google/course_templates/978/labs/488167",
        "solution_link": "https://www.youtube.com/watch?v=7D105v1SG2U&list=PLI0vR7P4HGfGakLvUkw_1YIgHgwGFSvqK&index=7"
      },
      {
        "lab_name": "Develop GenAI Apps with Gemini and Streamlit: Challenge Lab (Required)",
        "start_lab_link": "https://www.cloudskillsboost.google/course_templates/978/labs/488168",
        "solution_link": "https://www.youtube.com/watch?v=XaP7NQLgCrs&list=PLI0vR7P4HGfGakLvUkw_1YIgHgwGFSvqK&index=9"
      }
    ]
  },
  {
    "course_name": "Gen AI Arcade Game: Level 3",
    "course_page_link": "https://www.cloudskillsboost.google/games/6554",
    "labs": [
      {
        "lab_name": "Arcade Chatbot: Interactive Film-bot (Required)",
        "start_lab_link": "https://www.cloudskillsboost.google/games/6554/labs/41108",
        "solution_link": "N/A - Game Lab"
      },
      {
        "lab_name": "Arcade Chatbot: Interactive Music-bot (Required)",
        "start_lab_link": "https://www.cloudskillsboost.google/games/6554/labs/41109",
        "solution_link": "N/A - Game Lab"
      },
      {
        "lab_name": "Arcade Chatbot: Interactive French Language-bot (Required)",
        "start_lab_link": "https://www.cloudskillsboost.google/games/6554/labs/41110",
        "solution_link": "N/A - Game Lab"
      },
      {
        "lab_name": "Arcade Chatbot: Interactive Spanish Language-bot (Required)",
        "start_lab_link": "https://www.cloudskillsboost.google/games/6554/labs/41111",
        "solution_link": "N/A - Game Lab"
      },
      {
        "lab_name": "Arcade Chatbot: Interactive Hindi Language-bot (Required)",
        "start_lab_link": "https://www.cloudskillsboost.google/games/6554/labs/41112",
        "solution_link": "N/A - Game Lab"
      },
      {
        "lab_name": "Arcade Chatbot: Interactive Mandarin Language-bot (Required)",
        "start_lab_link": "https://www.cloudskillsboost.google/games/6554/labs/41113",
        "solution_link": "N/A - Game Lab"
      },
      {
        "lab_name": "Arcade Chatbot: Interactive Portuguese Language-bot (Required)",
        "start_lab_link": "https://www.cloudskillsboost.google/games/6554/labs/41114",
        "solution_link": "N/A - Game Lab"
      },
      {
        "lab_name": "Arcade Hero: Building Blocks Cloud Run functions III (Required)",
        "start_lab_link": "https://www.cloudskillsboost.google/games/6554/labs/41115",
        "solution_link": "N/A - Game Lab"
      },
      {
        "lab_name": "Arcade Hero: Building Blocks Cloud Run functions IV (Required)",
        "start_lab_link": "https://www.cloudskillsboost.google/games/6554/labs/41116",
        "solution_link": "N/A - Game Lab"
      },
      {
        "lab_name": "Arcade Hero: Enter the VPC (Required)",
        "start_lab_link": "https://www.cloudskillsboost.google/games/6554/labs/41117",
        "solution_link": "N/A - Game Lab"
      },
      {
        "lab_name": "Arcade Hero: Enter the Source Repository (Required)",
        "start_lab_link": "https://www.cloudskillsboost.google/games/6554/labs/41118",
        "solution_link": "N/A - Game Lab"
      },
      {
        "lab_name": "Arcade Hero: Building Blocks GCS I (Required)",
        "start_lab_link": "https://www.cloudskillsboost.google/games/6554/labs/41119",
        "solution_link": "N/A - Game Lab"
      },
      {
        "lab_name": "Arcade Hero: Enter the Storage (Required)",
        "start_lab_link": "https://www.cloudskillsboost.google/games/6554/labs/41120",
        "solution_link": "N/A - Game Lab"
      },
      {
        "lab_name": "Arcade Hero: Enter the Cloud Run functions Ruby (Required)",
        "start_lab_link": "https://www.cloudskillsboost.google/games/6554/labs/41121",
        "solution_link": "N/A - Game Lab"
      },
      {
        "lab_name": "Arcade Hero: Enter the Cloud Run functions Python (Required)",
        "start_lab_link": "https://www.cloudskillsboost.google/games/6554/labs/41122",
        "solution_link": "N/A - Game Lab"
      },
      {
        "lab_name": "Arcade Hero: Enter the Subnet (Required)",
        "start_lab_link": "https://www.cloudskillsboost.google/games/6554/labs/41123",
        "solution_link": "N/A - Game Lab"
      }
    ]
  }
];

// Social Links component - Moved outside ResourcesPage
const SocialLinks = () => (
  <>
    <Link href="https://linkedin.com/company/gdgoc-gctc">
      <div className="cursor-pointer hover:text-accent transition-colors">
        <svg className='w-6 h-6' xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512">
          <path d="M416 32H31.9C14.3 32 0 46.5 0 64.3v383.4C0 465.5 14.3 480 31.9 480H416c17.6 0 32-14.5 32-32.3V64.3c0-17.8-14.4-32.3-32-32.3zM135.4 416H69V202.2h66.5V416zm-33.2-243c-21.3 0-38.5-17.3-38.5-38.5S80.9 96 102.2 96c21.2 0 38.5 17.3 38.5 38.5 0 21.3-17.2 38.5-38.5 38.5zm282.1 243h-66.4V312c0-24.8-.5-56.7-34.5-56.7-34.6 0-39.9 27-39.9 54.9V416h-66.4V202.2h63.7v29.2h.9c8.9-16.8 30.6-34.5 62.9-34.5 67.2 0 79.7 44.3 79.7 101.9V416z" fill="currentColor" />
        </svg>
      </div>
    </Link>

    <Link href="https://x.com/gdgoc_gctc">
      <div className="cursor-pointer hover:text-accent transition-colors">
        <svg className='w-6 h-6' xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512">
          <path d="M64 32C28.7 32 0 60.7 0 96V416c0 35.3 28.7 64 64 64H384c35.3 0 64-28.7 64-64V96c0-35.3-28.7-64-64-64H64zm297.1 84L257.3 234.6 379.4 396H283.8L209 298.1 123.3 396H75.8l111-126.9L69.7 116h98l67.7 89.5L313.6 116h47.5zM323.3 367.6L153.4 142.9H125.1L296.9 367.6h26.3z" fill="currentColor" />
        </svg>
      </div>
    </Link>

    <Link href="https://www.instagram.com/gdgoc.gctc?igsh=ZXI4a3VoYjRqdnFk">
      <div className="cursor-pointer hover:text-accent transition-colors">
        <svg className='w-6 h-6' xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512">
          <path d="M224.1 141c-63.6 0-114.9 51.3-114.9 114.9s51.3 114.9 114.9 114.9S339 319.5 339 255.9 287.7 141 224.1 141zm0 189.6c-41.1 0-74.7-33.5-74.7-74.7s33.5-74.7 74.7-74.7 74.7 33.5 74.7 74.7-33.6 74.7-74.7 74.7zm146.4-194.3c0 14.9-12 26.8-26.8 26.8-14.9 0-26.8-12-26.8-26.8s12-26.8 26.8-26.8 26.8 12 26.8 26.8zm76.1 27.2c-1.7-35.9-9.9-67.7-36.2-93.9-26.2-26.2-58-34.4-93.9-36.2-37-2.1-147.9-2.1-184.9 0-35.8 1.7-67.6 9.9-93.9 36.1s-34.4 58-36.2 93.9c-2.1 37-2.1 147.9 0 184.9 1.7 35.9 9.9 67.7 36.2 93.9s58 34.4 93.9 36.2c37 2.1 147.9 2.1 184.9 0 35.9-1.7 67.7-9.9 93.9-36.2 26.2-26.2 34.4-58 36.2-93.9 2.1-37 2.1-147.8 0-184.8zM398.8 388c-7.8 19.6-22.9 34.7-42.6 42.6-29.5 11.7-99.5 9-132.1 9s-102.7 2.6-132.1-9c-19.6-7.8-34.7-22.9-42.6-42.6-11.7-29.5-9-99.5-9-132.1s-2.6-102.7 9-132.1c7.8-19.6 22.9-34.7 42.6-42.6 29.5-11.7 99.5-9 132.1-9s102.7-2.6 132.1 9c19.6 7.8 34.7 22.9 42.6 42.6 11.7 29.5 9 99.5 9 132.1s2.7 102.7-9 132.1z" fill="currentColor" />
        </svg>
      </div>
    </Link>

    <Link href="http://gdg.community.dev/gdg-on-campus-geethanjali-college-of-engineering-and-technology-hyderabad-india">
      <div className="cursor-pointer hover:text-accent transition-colors">
        <svg className='w-6 h-6' xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
          <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-1 17.93c-3.95-.49-7-3.85-7-7.93 0-.55.06-1.08.16-1.58L9 13v1c0 1.1.9 2 2 2v2.93zm6.9-2.54c-.26-.81-1-1.39-1.9-1.39h-1v-3c0-.55-.45-1-1-1H8v-2h2c.55 0 1-.45 1-1V7h2c1.1 0 2-.9 2-2v-.41c2.93 1.19 5 4.06 5 7.41 0 2.08-.8 3.97-2.1 5.39z" fill="currentColor" />
        </svg>
      </div>
    </Link>


    <div className="h-4 flex items-center">
      <Switch sizePx={16} />
    </div>
  </>
);

const ResourcesPage = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [openCourse, setOpenCourse] = useState(null);
  const [currentLogo, setCurrentLogo] = useState('/assets/gdsc-logo_svg.svg');
  const [isGiftBoxOpen, setIsGiftBoxOpen] = useState(false);
  const [showSwagsMessage, setShowSwagsMessage] = useState(false);
  const [currentTier, setCurrentTier] = useState(0);
  const [isRevealing, setIsRevealing] = useState(false);
  const [showConfetti, setShowConfetti] = useState(false);
  const [windowDimensions, setWindowDimensions] = useState({ width: 0, height: 0 });

  const router = useRouter();

  // Theme logic from page.js
  useEffect(() => {
    const storedTheme = localStorage.getItem('theme');
    const initialTheme = storedTheme || 'dark';
    setCurrentLogo(
      initialTheme === 'light'
        ? '/assets/gdsc-logo-svg-light.svg'
        : '/assets/gdsc-logo_svg.svg'
    );

    const handleThemeChange = (event) => {
      const newTheme = event.detail;
      if (!newTheme) return;
      setCurrentLogo(
        newTheme === 'light'
          ? '/assets/gdsc-logo-svg-light.svg'
          : '/assets/gdsc-logo_svg.svg'
      );
    };

    window.addEventListener('themeChange', handleThemeChange);

    return () => {
      window.removeEventListener('themeChange', handleThemeChange);
    };
  }, []);

  // Get window dimensions for confetti
  useEffect(() => {
    const updateWindowDimensions = () => {
      setWindowDimensions({
        width: window.innerWidth,
        height: window.innerHeight,
      });
    };

    updateWindowDimensions();
    window.addEventListener('resize', updateWindowDimensions);
    return () => window.removeEventListener('resize', updateWindowDimensions);
  }, []);

  const toggleCourse = (index) => {
    setOpenCourse(openCourse === index ? null : index);
  };

  const tiers = [
    {
      image: '/tier1.svg',
      title: 'Tier 1 - Premium Swags',
      message: 'When 100 students complete the campaign, the top 100 achievers will receive these exclusive premium swags!',
      requirement: '100 students needed'
    },
    {
      image: '/tier2.svg',
      title: 'Tier 2 - Elite Swags',
      message: 'When 70 students complete the campaign, the top 70 achievers will receive these elite swags!',
      requirement: '70 students needed'
    },
    {
      image: '/tier3.svg',
      title: 'Tier 3 - Special Swags',
      message: 'When 50 students complete the campaign, the top 50 achievers will receive these special swags!',
      requirement: '50 students needed'
    }
  ];

  const revealSwags = () => {
    setIsRevealing(true);
    setCurrentTier(0);
    setShowSwagsMessage(true);
    setShowConfetti(true);
    
    // Stop confetti after 6 seconds
    setTimeout(() => setShowConfetti(false), 6000);
    
    // Launch-style reveal animation
    const revealInterval = setInterval(() => {
      setCurrentTier(prev => {
        if (prev < tiers.length - 1) {
          return prev + 1;
        } else {
          clearInterval(revealInterval);
          setIsRevealing(false);
          return prev;
        }
      });
    }, 2000); // 2 seconds between each tier reveal
  };


  return (
    <>
      {/* Navbar - Copied from page.js */}
      <nav className='w-full shadow-md relative bg-[var(--color-background)] border-b border-[var(--color-border)]'>
        {/* Mobile Header - Compact Design */}
        <div className="md:hidden">
          <div className="px-4 py-3 flex items-center justify-between">
            <div className="flex items-center space-x-3">
              <Image src="/assets/cloudLg.svg" alt="Google Cloud Logo" width="32" height="32" />
              <div>
                <p className="text-xs font-medium text-[var(--color-header-text)] leading-tight">
                  Demo Days: Google Cloud Study Jams 2025-26
                </p>
              </div>
            </div>
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="text-[var(--color-primary)] focus:outline-none p-2 rounded-lg hover:bg-[var(--color-card-background)] transition-colors"
            >
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d={isMenuOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16m-7 6h7"}
                />
              </svg>
            </button>
          </div>
          <div className="px-4 pb-3">
            <div className="relative h-10 w-full">
              <Image
                src={currentLogo}
                alt="GDSC Logo"
                fill
                sizes="100vw"
                className="object-contain"
                priority
              />
            </div>
          </div>
        </div>

        {/* Desktop Header - Original Design */}
        <div className="hidden md:block">
        <div className="bg-[var(--color-background)] text-[var(--color-header-text)] w-full m-auto text-center p-2 flex justify-center items-center">
          <div><Image src="/assets/cloudLg.svg" alt="Google Cloud Logo" width="40" height="40" /></div>
          <p className='text-sm md:text-base'>
            Demo Days: Google Cloud Study Jams 2025-26
          </p>
        </div>

        <div className="w-full pl-0 pr-4 md:pl-0 md:pr-6 py-3 flex justify-between items-center">
          <div className="logo flex items-center justify-start h-12 md:h-16 -ml-6 md:-ml-10">
            <div className="relative h-full w-[22rem] md:w-[32rem]">
              <Image
                src={currentLogo}
                alt="GDSC Logo"
                fill
                sizes="(max-width: 768px) 22rem, 32rem"
                className="object-contain"
                priority
              />
            </div>
          </div>

          {/* Desktop Links */}
            <div className="flex items-center space-x-5 text-[var(--color-primary)]">
            <SocialLinks />
            </div>
          </div>
        </div>

        {/* Mobile Sidebar */}
        <MobileSidebar isOpen={isMenuOpen} onClose={() => setIsMenuOpen(false)} />
      </nav>


      {/* Confetti Effect */}
      {showConfetti && (
        <div className="fixed inset-0 z-[60] pointer-events-none">
          <Confetti
            width={windowDimensions.width}
            height={windowDimensions.height}
            recycle={false}
            numberOfPieces={200}
            gravity={0.3}
          />
        </div>
      )}

      {/* Animated Gift Box - Copied from page.js */}
      <div className="fixed bottom-6 right-6 z-40">
        <button
          onClick={() => setIsGiftBoxOpen(true)}
          className="gift-box-button group relative"
          title="Click to reveal swags!"
        >
          <Image
            src="/giftbox.svg"
            alt="Gift Box"
            width={48}
            height={48}
            className="group-hover:opacity-80 transition-opacity duration-300"
          />
          <div className="absolute -top-2 -right-2 w-4 h-4 bg-red-500 rounded-full animate-ping"></div>
        </button>
      </div>

      {/* Gift Box Popup - Copied from page.js */}
      {isGiftBoxOpen && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
          <div className="bg-white dark:bg-gray-800 rounded-2xl p-8 max-w-md w-full text-center shadow-2xl transform transition-all duration-300 scale-100 popup-enter">
            <div className="mb-6">
              <Image
                src="/giftbox.svg"
                alt="Gift Box"
                width={64}
                height={64}
                className="mx-auto mb-4"
              />
              <h3 className="text-2xl font-bold text-gray-800 dark:text-white mb-2">
                🎁 Surprise Gift Box! 🎁
              </h3>
              <p className="text-gray-600 dark:text-gray-300">
                Click the button below to reveal your swags!
              </p>
            </div>
            
            {!showSwagsMessage ? (
              <button
                onClick={revealSwags}
                className="bg-gradient-to-r from-yellow-400 to-yellow-600 hover:from-yellow-500 hover:to-yellow-700 text-white font-semibold py-2 px-4 md:py-2.5 md:px-6 rounded-lg text-sm md:text-base transition-all duration-300 transform hover:scale-105 shadow-md hover:shadow-lg"
              >
                <span className="hidden sm:inline">🚀 Launch Swags Reveal! 🚀</span>
                <span className="sm:hidden">🎁 Reveal Swags</span>
              </button>
            ) : (
              <div className="space-y-6">
                <div className="relative">
                  <div className="text-2xl font-bold text-gray-800 dark:text-white mb-4 text-center">
                    {tiers[currentTier].title}
                  </div>
                  
                  {/* Carousel Container */}
                  <div className="relative mb-6">
                    <div className="overflow-hidden rounded-xl launch-glow">
                      <div className="flex transition-transform duration-500 ease-in-out" style={{ transform: `translateX(-${currentTier * 100}%)` }}>
                        {tiers.map((tier, index) => (
                          <div key={index} className="w-full flex-shrink-0">
                            <div className="relative w-full h-64">
                              <Image
                                src={tier.image}
                                alt={tier.title}
                                fill
                                className="object-contain tier-reveal transition-all duration-1000"
                                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                              />
                            </div>
                          </div>
                        ))}
                      </div>
                    </div>
                    
                    {/* Carousel Navigation */}
                    <div className="flex justify-center space-x-2 mt-4">
                      {tiers.map((_, index) => (
                        <button
                          key={index}
                          onClick={() => setCurrentTier(index)}
                          className={`w-3 h-3 rounded-full transition-all duration-500 ${
                            index === currentTier 
                              ? 'bg-yellow-500 scale-125 progress-pulse' 
                              : 'bg-gray-300 dark:bg-gray-600 hover:bg-gray-400 dark:hover:bg-gray-500'
                          }`}
                        />
                      ))}
                    </div>
                  </div>
                  
                  <p className="text-gray-600 dark:text-gray-300 text-sm leading-relaxed text-center">
                    {tiers[currentTier].message}
                  </p>
                  
                  <div className="bg-yellow-100 dark:bg-yellow-900/30 border border-yellow-300 dark:border-yellow-700 rounded-lg p-3 mt-4">
                    <p className="text-yellow-800 dark:text-yellow-200 font-semibold text-sm text-center">
                      📊 {tiers[currentTier].requirement}
                    </p>
                  </div>
                </div>
                
                <div className="flex space-x-3 justify-center">
                  <button
                    onClick={() => {
                      setIsGiftBoxOpen(false);
                      setShowSwagsMessage(false);
                      setCurrentTier(0);
                      setIsRevealing(false);
                      setShowConfetti(false);
                    }}
                    className="bg-gray-500 hover:bg-gray-600 text-white font-medium py-2 px-6 rounded-full transition-colors duration-200"
                  >
                    Close
                  </button>
                  <button
                    onClick={() => {
                      setShowSwagsMessage(false);
                      setCurrentTier(0);
                      setIsRevealing(false);
                      setShowConfetti(false);
                    }}
                    className="bg-yellow-500 hover:bg-yellow-600 text-white font-medium py-2 px-6 rounded-full transition-colors duration-200"
                  >
                    Launch Again
                  </button>
                </div>
              </div>
            )}
            
            <button
              onClick={() => {
                setIsGiftBoxOpen(false);
                setShowSwagsMessage(false);
                setCurrentTier(0);
                setIsRevealing(false);
                setShowConfetti(false);
              }}
              className="absolute top-4 right-4 text-gray-400 hover:text-gray-600 dark:hover:text-gray-300 transition-colors duration-200"
            >
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
          </div>
        </div>
      )}

      <div className="min-h-screen bg-[var(--color-background)] text-[var(--color-primary)] p-4 sm:p-6 lg:p-8">
        <div className="max-w-4xl mx-auto">
          <button
            onClick={() => {
              router.push('/');
            }}
            className="mb-6 px-4 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600 transition-colors flex items-center"
          >
            <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10 19l-7-7m0 0l7-7m-7 7h18"></path></svg>
            Back
          </button>

          <h1 className="text-4xl font-extrabold text-center mb-8 text-[var(--color-header-text)]">Campaign Syllabus & Solutions 📖</h1>
          <p className="text-center text-lg mb-12 text-[var(--color-secondary)]">
            Complete guide to all courses with solutions and resources!
          </p>

          <div className="space-y-6">
            {coursesData.map((course, courseIndex) => (
              <div key={courseIndex} className="bg-[var(--color-card-background)] rounded-xl shadow-lg overflow-hidden border border-[var(--color-border)]">
                <button
                  className="w-full flex justify-between items-center p-5 text-left font-semibold text-xl transition-all duration-300 hover:bg-[var(--color-hover-background)]"
                  onClick={() => toggleCourse(courseIndex)}
                >
                  <span>{course.course_name}</span>
                  <svg
                    className={`w-6 h-6 transform transition-transform duration-300 ${openCourse === courseIndex ? 'rotate-180' : 'rotate-0'}`}
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7"></path>
                  </svg>
                </button>

                {openCourse === courseIndex && (
                  <div className="p-5 border-t border-[var(--color-border)]">
                    {course.course_page_link && (
                      <p className="mb-4">
                        <Link href={course.course_page_link} target="_blank" rel="noopener noreferrer" className="text-[var(--color-accent)] hover:underline flex items-center space-x-2">
                          <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 6.042A8.967 8.967 0 006 3.75c-1.052 0-2.062.18-3 .512v14.25A8.987 8.987 0 0112 21.75c1.052 0 2.062-.18 3-.512v-14.25c-1.052-.18-2.062-.25-3-.25zM12 6.042V3.75m0 2.292c-1.19 0-2.37-.08-3.548-.252M12 6.042c1.19 0 2.37.08 3.548.252m-4.478 8.278l-1.834-1.834m0 3.668L17.25 10.5m-1.834 1.834l1.834 1.834m-3.668 0l-1.834-1.834"></path></svg>
                          <span>📖 Course Page</span>
                        </Link>
                      </p>
                    )}
                    <ul className="space-y-3">
                      {course.labs.map((lab, labIndex) => (
                        <li key={labIndex} className="flex flex-col sm:flex-row sm:items-center justify-between bg-[var(--color-background)] p-3 rounded-lg border border-[var(--color-border)]">
                          <span className="font-medium text-[var(--color-primary)] mb-2 sm:mb-0">{lab.lab_name}</span>
                          <div className="flex space-x-3">
                            {lab.start_lab_link && (
                              <Link href={lab.start_lab_link} target="_blank" rel="noopener noreferrer" className="text-green-600 hover:underline flex items-center space-x-1">
                                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 7l5 5m0 0l-5 5m5-5H6"></path></svg>
                                <span>Start Lab</span>
                              </Link>
                            )}
                            {lab.solution_link && lab.solution_link !== 'N/A - Game Lab' && (
                              <Link href={lab.solution_link} target="_blank" rel="noopener noreferrer" className="text-red-600 hover:underline flex items-center space-x-1">
                                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 10l4.553-2.276A1 1 0 0121 8.618v6.764a1 1 0 01-1.447.894L15 14M5 18h8a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v8a2 2 0 002 2z"></path></svg>
                                <span>Solution</span>
                              </Link>
                            )}
                            {lab.solution_link === 'N/A - Game Lab' && (
                              <span className="text-[var(--color-secondary)] flex items-center space-x-1">
                                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M18.364 18.364A9 9 0 005.636 5.636m12.728 12.728A9 9 0 015.636 5.636m12.728 12.728L5.636 5.636"></path></svg>
                                <span>Solution (N/A)</span>
                              </span>
                            )}
                          </div>
                        </li>
                      ))}
                    </ul>
                  </div>
                )}
              </div>
            ))}
          </div>

        </div>
      </div>

      {/* Footer - Copied from page.js */}
      <Footer />
    </>
  );
};

export default ResourcesPage;