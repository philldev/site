import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import {
  InstagramLogoIcon,
  TwitterLogoIcon,
  LinkedInLogoIcon,
  GitHubLogoIcon,
} from "@radix-ui/react-icons";
import { GeistMono } from "geist/font/mono";

export default function Home() {
  return (
    <div className="py-4 px-4 space-y-10">
      <div>
        <h1 className="sr-only">Deddy Wolley</h1>
        <h2 className="text-2xl font-medium mb-4">Deddy Wolley</h2>
        <p>
          Hi, I'm a software engineer from Manado Indonesia. Currently working
          from home as a frontend developer where I help build web applications
          using frontend web frameworks.
        </p>
      </div>

      <div>
        <div className="grid gap-2">
          <h4 className="font-medium text-muted-foreground">
            Lang, Frameworks, Libraries
          </h4>
          <div className={cn("flex gap-2 flex-wrap", GeistMono.className)}>
            <Badge>typescript</Badge>
            <Badge>react</Badge>
            <Badge>NextJs</Badge>
            <Badge>prisma</Badge>
            <Badge>tailwindcss</Badge>
            <Badge>shadcnui</Badge>
            <Badge>TRPC</Badge>
          </div>
        </div>
      </div>

      <div>
        <h4 className="font-medium text-muted-foreground">Socials</h4>
        <div className="flex">
          <Button size="icon" variant="ghost">
            <InstagramLogoIcon />
          </Button>

          <Button size="icon" variant="ghost">
            <TwitterLogoIcon />
          </Button>

          <Button size="icon" variant="ghost">
            <GitHubLogoIcon />
          </Button>

          <Button size="icon" variant="ghost">
            <LinkedInLogoIcon />
          </Button>
        </div>
      </div>
      <div className="">
        <h3 className="text-2xl font-medium mb-2">Projects</h3>
        <p className="text-muted-foreground">Coming Soon</p>
      </div>

      <div className="">
        <h3 className="text-2xl font-medium mb-2">Blogs</h3>
        <p className="text-muted-foreground">Coming Soon</p>
      </div>

      <div className="">
        <h3 className="text-2xl font-medium mb-2">Work</h3>
        <div className="flex text-sm justify-between items-center">
          <div className="flex flex-col">
            <span className="font-medium">Weekendinc</span>
            <span className="opacity-80">Frontend Developer</span>
          </div>
          <span>
            2019 - <span className="opacity-80">Present</span>
          </span>
        </div>
      </div>
    </div>
  );
}
