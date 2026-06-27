import React from 'react'
import { Github, Linkedin, Mail, ExternalLink } from 'lucide-react'

export default function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="bg-white/60 dark:bg-gray-800/50 border-t border-gray-200 dark:border-gray-700 mt-16">
      <div className="max-w-6xl mx-auto px-4 py-12">
        <div className="grid md:grid-cols-3 gap-8 mb-8">
          <div>
            <h3 className="font-semibold mb-4">Rajat Mahajan</h3>
            <p className="text-sm text-gray-600 dark:text-gray-400">
              Software Engineer specializing in backend systems, distributed architectures, and cloud-native applications.
            </p>
          </div>

          <div>
            <h4 className="font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2 text-sm">
              <li><a href="#" className="hover:text-primary">Home</a></li>
              <li><a href="#" className="hover:text-primary">Experience</a></li>
              <li><a href="#" className="hover:text-primary">Projects</a></li>
              <li><a href="#" className="hover:text-primary">Resume</a></li>
            </ul>
          </div>

          <div>
            <h4 className="font-semibold mb-4">Connect</h4>
            <div className="flex gap-3">
              <a
                href="https://github.com/rajatmahajan23"
                target="_blank"
                rel="noreferrer"
                aria-label="GitHub"
                className="p-2 rounded-lg bg-gray-100 dark:bg-gray-700 hover:bg-primary hover:text-white transition"
              >
                <Github size={18} />
              </a>
              <a
                href="https://www.linkedin.com/in/rajat-mahajan23/"
                target="_blank"
                rel="noreferrer"
                aria-label="LinkedIn"
                className="p-2 rounded-lg bg-gray-100 dark:bg-gray-700 hover:bg-primary hover:text-white transition"
              >
                <Linkedin size={18} />
              </a>
              <a
                href="mailto:rmahaj13@asu.edu"
                aria-label="Email"
                className="p-2 rounded-lg bg-gray-100 dark:bg-gray-700 hover:bg-primary hover:text-white transition"
              >
                <Mail size={18} />
              </a>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-200 dark:border-gray-700 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center text-sm text-gray-600 dark:text-gray-400">
            <p>© {currentYear} Rajat Mahajan. All rights reserved.</p>
            <div className="flex gap-4 mt-4 md:mt-0">
              <a href="#" className="hover:text-primary">Privacy</a>
              <a href="#" className="hover:text-primary">Terms</a>
              <a href="https://github.com/rajatmahajan23/portfolio" target="_blank" rel="noreferrer" className="hover:text-primary flex items-center gap-1">
                Source <ExternalLink size={14} />
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}
