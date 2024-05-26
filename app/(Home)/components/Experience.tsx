import React from 'react'
import Image from "next/image";
import { TracingBeam } from "@/components/ui/tracing-beam";
import Title from './Title';

export default function Experience() {
    const dummyContent = [
        {
          title: "STANCE",
          description: (
            <>
              <p>
              Stance is a cloud-agnostic compliance platform designed to empower organizations to deploy compliant software and infrastructure by integrating compliance assurance into DevSecOps workflows. This platform enables the creation of composable, testable release, and deployment workflows that align with regulatory requirements and best practices, ensuring that deployments are compliant by design.
              </p>
              <p className=" text-cyan-500"><a href="https://stance.coauth.io/">Website</a></p>

            </>
          ),
          badge: "2023-2024",
          image:"/codepipes.gif",
        },
        {
          title: "CODEPIPES",
          description: (
            <>
              <p>
               Code Pipes is a DevSecOps workflow orchestration and automation platform, empowering software developers, IT administrators, and security teams to enhance their value stream delivery, fostering a self-service ecosystem that prevents conflicts and promotes collaboration.With Code Pipes, users can manage their application deployments through an interactive web dashboard, REST APIs, and a command line interface.
              </p>
              <p className=" text-cyan-500"><a href="https://codepipes.io/">Website</a></p>
            </>
          ),
          badge: "2021-2023",
          image: "/codepipes.gif"
        },
        {
          title: "STRATO",
          description: (
            <>
              <p>
              Strato is an application reliability monitoring service that visualizes and manages cloud infrastructure & data systems to deliver 360º coverage, business context and seamless collaboration on a single screen.
              </p>
            </>
          ),
          badge: "2020-2021",
          image:
            "/strato.gif",
        },
        {
            title: "BOLT",
            description: (
              <>
                <p>
                Bolt is a cloud-native console designed to optimize cost savings for development environments by efficiently managing the usage of virtual machines (VMs), Kubernetes (K8s) cluster nodes, and databases. This innovative platform uses a machine-native tray application to monitor user activity, automatically shutting down resources when not in use and restarting them as soon as they are needed, providing significant cost savings to organizations.
                </p>
              </>
            ),
            badge: "2017-2020",
            image:
              "./bolt.png",
          },
      ];
      
  return (
    <div>
      <Title text="Experiences"></Title>
      <div>
        <TracingBeam className="px-6">
        <div className="max-w-2xl mx-auto antialiased pt-4 relative">
            {dummyContent.map((item, index) => (
            <div key={`content-${index}`} className="mb-10">
                <h2 className="bg-white text-black rounded-full text-sm w-fit px-4 py-1 mb-4">
                {item.badge}
                </h2>

                <p className="text-xl mb-4">
                {item.title}
                </p>

                <div className="text-sm  prose prose-sm dark:prose-invert">
                {item?.image && (
                    <Image
                    src={item.image}
                    alt="blog thumbnail"
                    height="1000"
                    width="1000"
                    className="rounded-lg mb-10 object-cover"
                    unoptimized
                    />
                )}
                {item.description}
                </div>
            </div>
            ))}
        </div>
        </TracingBeam>
    </div>
    </div>

  )
}
