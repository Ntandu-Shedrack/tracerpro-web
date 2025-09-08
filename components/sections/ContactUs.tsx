"use client";

import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import { Checkbox } from "@/components/ui/checkbox";
import { Label } from "@/components/ui/label";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

export const ContactUs = () => {
  return (
    <section className="pt-8 pb-20 md:pt-5 md:pb-10">
      <div className="container mx-auto px-4 md:px-6 lg:px-8 lg:max-w-[1440px] md:flex">
        {/* Left background */}
        <div className="hidden md:flex w-1/3 bg-[radial-gradient(ellipse_100%_200%_at_bottom_left,#183EC2,#EAEEFE_100%)] rounded-lg" />

        {/* Right form */}
        <div className="w-full md:w-2/3 flex items-center justify-center px-6 md:px-12 lg:px-20">
          <div className="w-full max-w-xl">
            {/* Header */}
            <h2 className="text-3xl font-bold mb-2">
              Let&apos;s hear from you
            </h2>
            <p className="text-gray-600 mb-8">
              You can reach us anytime via{" "}
              <a
                href="mailto:josantashedrack@gmail.com"
                className="text-blue-600 hover:underline"
              >
                josantashedrack@gmail.com
              </a>
            </p>

            {/* Form */}
            <form className="space-y-6">
              {/* Name */}
              <div>
                <Label htmlFor="name">Name</Label>
                <Input id="name" placeholder="Your name" className="mt-1" />
              </div>

              {/* Email */}
              <div>
                <Label htmlFor="email">Email</Label>
                <Input
                  id="email"
                  type="email"
                  placeholder="you@company.com"
                  className="mt-1"
                />
              </div>

              {/* Phone */}
              <div>
                <Label htmlFor="phone">Phone number</Label>
                <div className="flex gap-2 mt-1">
                  <Select defaultValue="tz">
                    <SelectTrigger className="w-[120px]">
                      <SelectValue placeholder="Country" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="us">US</SelectItem>
                      <SelectItem value="uk">UK</SelectItem>
                      <SelectItem value="tz">TZ</SelectItem>
                    </SelectContent>
                  </Select>
                  <Input id="phone" type="tel" placeholder="+255 000-000-000" />
                </div>
              </div>

              {/* Message */}
              <div>
                <Label htmlFor="message">How can we help?</Label>
                <Textarea
                  id="message"
                  placeholder="Tell us a little about the project..."
                  className="mt-1"
                />
              </div>

              {/* Services */}
              <div>
                <Label className="mb-2 block">Services</Label>
                <div className="grid grid-cols-2 gap-3">
                  {[
                    "Website design",
                    "UX design",
                    "User research",
                    "Content creation",
                    "Strategy & consulting",
                    "Other",
                  ].map((service) => (
                    <div key={service} className="flex items-center space-x-2">
                      <Checkbox id={service} />
                      <Label htmlFor={service} className="text-sm">
                        {service}
                      </Label>
                    </div>
                  ))}
                </div>
              </div>

              {/* Submit */}
              <Button type="submit" className="w-full">
                Send Message
              </Button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};
