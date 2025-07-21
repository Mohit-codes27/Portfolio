import { useState, useRef, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Badge } from "@/components/ui/badge";
import {
  Send,
  Github,
  Linkedin,
  Mail,
  ExternalLink,
  Code,
  User,
  Briefcase,
  Phone,
  Brain,
  Menu,
  X,
} from "lucide-react";
import './index.css'

const portfolioData = {
  name: "Mohit Morya",
  title: "MERN Stack Developer",
  bio: "Passionate developer with 1+ years of experience building web applications. I love creating innovative solutions and learning new technologies.",
  skills: [
    "React",
    "JavaScript",
    "Node.js",
    "Java",
    "AWS",
    "MongoDB",
    "Express",
    "Tailwind CSS",
    "Socket.IO",
    "GSAP",
    "Appwrite",
  ],
  projects: [
    {
      name: "Uber Clone",
      description:
        "Developed a full-featured Uber clone using the MERN stack with real-time location tracking and ride-booking functionality using Google Maps API.",
      tech: ["React", "Node.js", "MongoDB", "Google Maps API"],
      link: "https://github.com/Mohit-codes27/Uber-clone",
      demo: "https://your-uber-demo-link.com",
    },
    {
      name: "Restroom Finder",
      description:
        "Created a location-based app to find nearby restrooms using geolocation and filtering. Designed for mobile responsiveness with a user-friendly map view.",
      tech: ["React", "Node.js", "Tailwind", "Map API"],
      link: "https://github.com/Mohit-codes27/Restroom-finder",
      demo: "https://your-restroom-finder-demo.com",
    },
    {
      name: "3D Animated Website Clone",
      description:
        "Recreated a visually stunning website with smooth 3D animations using GSAP and React. Focused on scroll-based animations and performance optimization.",
      tech: ["React", "GSAP", "HTML", "CSS"],
      link: "https://github.com/Mohit-codes27/gsap-3d-clone",
      demo: "https://your-3d-clone-demo.com",
    },
    {
      name: "Blog Platform (Appwrite)",
      description:
        "Built a basic blog site using Appwrite backend for authentication and database. Includes post creation, editing, and real-time syncing (UI still in progress).",
      tech: ["React", "Appwrite", "Tailwind CSS"],
      link: "https://github.com/Mohit-codes27/blog-app-appwrite",
      demo: "https://your-blog-demo.com",
    },
  ],

  contact: {
    email: "mohitmorya56@gmail.com",
    github: "https://github.com/Mohit-codes27",
    linkedin: "https://linkedin.com/in/alexjohnson",
    phone: "+91 8595678178",
  },
};

const quickActions = [
  { label: "About Me", icon: User, query: "Tell me about yourself" },
  { label: "Skills", icon: Code, query: "What are your skills?" },
  { label: "Projects", icon: Briefcase, query: "Show me your projects" },
  { label: "Contact", icon: Phone, query: "How can I contact you?" },
  { label: "Experience", icon: Brain, query: "Tell your previous experience" },
];

export default function ChatPortfolio() {
  const [messages, setMessages] = useState([
    {
      id: "1",
      text: "Hello! 👋 Welcome to my interactive portfolio. I'm Mohit, a MERN Stack Developer passionate about creating amazing web experiences.\n\nFeel free to ask me about my skills, projects, or experience. You can also use the quick actions below!",
      sender: "bot",
      timestamp: new Date(),
    },
  ]);
  const [inputValue, setInputValue] = useState("");
  const [isTyping, setIsTyping] = useState(false);
  const [showQuickActions, setShowQuickActions] = useState(false);
  const messagesEndRef = useRef(null);
  const inputRef = useRef(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  const getResponse = (input) => {
    const lowerInput = input.toLowerCase();

    if (
      lowerInput.includes("hello") ||
      lowerInput.includes("hi") ||
      lowerInput.includes("hey")
    ) {
      return {
        text: "Hello! 👋 Great to meet you! I'm excited to share my work with you. What would you like to know about my development journey?",
      };
    }

    if (
      lowerInput.includes("about") ||
      lowerInput.includes("who are you") ||
      lowerInput.includes("tell me about yourself")
    ) {
      return {
        text: `I'm ${portfolioData.name}, a ${portfolioData.title}.\n\n${portfolioData.bio}\n\nI'm passionate about:\n• Building scalable web applications\n• Learning cutting-edge technologies\n• Solving complex problems with elegant code\n• Collaborating with amazing teams\n\nI believe in writing clean, maintainable code and creating user experiences that make a difference.`,
      };
    }

    if (
      lowerInput.includes("skill") ||
      lowerInput.includes("technology") ||
      lowerInput.includes("tech stack")
    ) {
      return {
        text: `Here are my core technical skills:\n\n${portfolioData.skills
          .map((skill) => `• ${skill}`)
          .join(
            "\n"
          )}\n\nI'm always learning and staying up-to-date with the latest technologies. Currently exploring AI/ML integration and cloud architecture!`,
        type: "skills",
      };
    }

    if (
      lowerInput.includes("project") ||
      lowerInput.includes("work") ||
      lowerInput.includes("portfolio")
    ) {
      return {
        text: "Here are some of my featured projects that showcase my skills:",
        type: "projects",
      };
    }

    if (
      lowerInput.includes("contact") ||
      lowerInput.includes("reach") ||
      lowerInput.includes("email") ||
      lowerInput.includes("hire")
    ) {
      return {
        text: "I'd love to connect with you! Here are the best ways to reach me:",
        type: "contact",
      };
    }

    if (
      lowerInput.includes("experience") ||
      lowerInput.includes("background")
    ) {
      return {
        text: "I have hands-on experience leading frontend and full-stack development projects, currently serving as the Tech Team Head during my internship. I specialize in building modern, scalable web applications using the MERN stack, while also mentoring teammates and managing end-to-end delivery.\n\nKey highlights:\n• Led development of 3+ full-stack web applications using React.js, Node.js, and MongoDB\n• Headed a team of 5+ developers during internship projects, ensuring timely and quality releases\n• Built and deployed responsive, user-friendly UIs with Tailwind CSS and GSAP animations\n• Implemented Appwrite services for real-time backend features like authentication and storage\n• Reduced page load time by 30% through frontend performance optimization\n• Streamlined deployment workflows using GitHub Actions and CI/CD practices",
      };
    }

    return {
      text: "That's a great question! I'd be happy to help. Try asking me about:\n\n• My background and experience\n• Technical skills and expertise\n• Recent projects and work\n• How we can work together\n\nOr use the quick action buttons for common topics!",
    };
  };

  const handleSendMessage = async (messageText) => {
    const text = messageText || inputValue;
    if (!text.trim()) return;

    const userMessage = {
      id: Date.now().toString(),
      text: text,
      sender: "user",
      timestamp: new Date(),
    };

    setMessages((prev) => [...prev, userMessage]);
    setInputValue("");
    setIsTyping(true);
    setShowQuickActions(false);

    // Simulate realistic typing delay
    setTimeout(() => {
      const response = getResponse(text);
      const botResponse = {
        id: (Date.now() + 1).toString(),
        text: response.text,
        sender: "bot",
        timestamp: new Date(),
        type: response.type,
      };
      setMessages((prev) => [...prev, botResponse]);
      setIsTyping(false);
    }, 800 + Math.random() * 1200);
  };

  const handleKeyPress = (e) => {
    if (e.key === "Enter" && !e.shiftKey) {
      e.preventDefault();
      handleSendMessage();
    }
  };

  const renderMessageContent = (message) => {
    if (message.type === "projects") {
      return (
        <div className="space-y-4">
          <p className="mb-4">{message.text}</p>
          {portfolioData.projects.map((project, index) => (
            <div
              key={index}
              className="bg-gray-700/50 rounded-lg p-3 sm:p-4 border border-gray-600"
            >
              <div className="flex flex-col sm:flex-row sm:items-start justify-between mb-2 gap-2">
                <h4 className="font-semibold text-white text-sm sm:text-base">{project.name}</h4>
                <div className="flex gap-2">
                  <Button
                    size="sm"
                    variant="ghost"
                    className="h-6 px-2 text-xs text-blue-400 hover:text-blue-300"
                    onClick={() => window.open(project.link, "_blank")}
                  >
                    <Github className="w-3 h-3 mr-1" />
                    Code
                  </Button>
                  <Button
                    size="sm"
                    variant="ghost"
                    className="h-6 px-2 text-xs text-green-400 hover:text-green-300"
                    onClick={() => window.open(project.demo, "_blank")}
                  >
                    <ExternalLink className="w-3 h-3 mr-1" />
                    Demo
                  </Button>
                </div>
              </div>
              <p className="text-gray-300 text-xs sm:text-sm mb-3">
                {project.description}
              </p>
              <div className="flex flex-wrap gap-1">
                {project.tech.map((tech) => (
                  <Badge
                    key={tech}
                    variant="secondary"
                    className="text-xs bg-gray-600 text-gray-200"
                  >
                    {tech}
                  </Badge>
                ))}
              </div>
            </div>
          ))}
        </div>
      );
    }

    if (message.type === "skills") {
      return (
        <div>
          <p className="mb-4 text-sm sm:text-base">{message.text.split("\n\n")[0]}</p>
          <div className="grid grid-cols-2 sm:grid-cols-3 gap-2 mb-4">
            {portfolioData.skills.map((skill) => (
              <Badge
                key={skill}
                variant="outline"
                className="justify-center py-2 border-blue-500/30 text-blue-300 text-xs"
              >
                {skill}
              </Badge>
            ))}
          </div>
          <p className="text-xs sm:text-sm text-gray-400">
            {message.text.split("\n\n")[1]}
          </p>
        </div>
      );
    }

    if (message.type === "contact") {
      return (
        <div className="space-y-4">
          <p className="mb-4 text-sm sm:text-base">{message.text}</p>
          <div className="space-y-3">
            <div className="flex items-center gap-3 p-3 bg-gray-700/50 rounded-lg">
              <Mail className="w-4 h-4 sm:w-5 sm:h-5 text-blue-400 flex-shrink-0" />
              <div className="min-w-0 flex-1">
                <p className="text-xs sm:text-sm text-gray-400">Email</p>
                <p
                  className="text-white cursor-pointer hover:text-gray-500 text-sm sm:text-base break-all"
                  onClick={() => window.open(`mailto:${portfolioData.contact.email}`)}
                >
                  {portfolioData.contact.email}
                </p>
              </div>
            </div>
            <div className="flex items-center gap-3 p-3 bg-gray-700/50 rounded-lg">
              <Github className="w-4 h-4 sm:w-5 sm:h-5 text-purple-400 flex-shrink-0" />
              <div className="min-w-0 flex-1">
                <p className="text-xs sm:text-sm text-gray-400">GitHub</p>
                <p
                  className="text-white cursor-pointer hover:text-gray-500 text-sm sm:text-base break-all"
                  onClick={() => window.open(portfolioData.contact.github)}
                >
                  {portfolioData.contact.github}
                </p>
              </div>
            </div>
            <div className="flex items-center gap-3 p-3 bg-gray-700/50 rounded-lg">
              <Linkedin className="w-4 h-4 sm:w-5 sm:h-5 text-blue-500 flex-shrink-0" />
              <div className="min-w-0 flex-1">
                <p className="text-xs sm:text-sm text-gray-400">LinkedIn</p>
                <p
                  className="text-white cursor-pointer hover:text-gray-500 text-sm sm:text-base break-all"
                  onClick={() => window.open(portfolioData.contact.linkedin)}
                >
                  {portfolioData.contact.linkedin}
                </p>
              </div>
            </div>
          </div>
        </div>
      );
    }

    return <p className="whitespace-pre-line text-sm sm:text-base">{message.text}</p>;
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 relative overflow-hidden">
      {/* Enhanced Background Pattern */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-gradient-to-br from-blue-900/10 via-purple-900/10 to-gray-900/10" />
        <div
          className="absolute inset-0 opacity-5"
          style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='100' height='100' viewBox='0 0 100 100' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='%23ffffff' fillOpacity='0.1'%3E%3Cpath d='M20 20h10v10H20zM40 40h10v10H40zM60 20h10v10H60zM80 40h10v10H80zM20 60h10v10H20zM60 60h10v10H60z'/%3E%3C/g%3E%3C/svg%3E")`,
            backgroundSize: "100px 100px",
          }}
        />
      </div>

      {/* Main Chat Interface */}
      <div className="relative z-10 flex flex-col h-screen max-w-5xl mx-auto">
        {/* Enhanced Header - Responsive */}
        <div className="flex items-center gap-2 sm:gap-4 p-3 sm:p-6 bg-gray-800/90 backdrop-blur-md border-b border-gray-700/50 shadow-lg">
          <Avatar className="w-10 h-10 sm:w-14 sm:h-14 ring-2 ring-blue-500/30">
            <AvatarImage src="/placeholder.svg?height=56&width=56" />
            <AvatarFallback className="bg-gradient-to-br from-blue-500 to-purple-600 text-white font-semibold text-sm">
              MM
            </AvatarFallback>
          </Avatar>
          <div className="flex-1 min-w-0">
            <h1 className="text-white font-bold text-sm sm:text-lg truncate">
              {portfolioData.name}
            </h1>
            <p className="text-blue-400 text-xs sm:text-sm font-medium truncate">
              {portfolioData.title}
            </p>
            <p className="text-gray-400 text-xs hidden sm:block">
              {isTyping ? (
                <span className="flex items-center gap-1">
                  <span className="w-2 h-2 bg-green-400 rounded-full animate-pulse" />
                  typing...
                </span>
              ) : (
                <span className="flex items-center gap-1">
                  <span className="w-2 h-2 bg-green-400 rounded-full" />
                  Online • Available for opportunities
                </span>
              )}
            </p>
          </div>
          <div className="flex gap-1 sm:gap-2">
            <Button
              variant="ghost"
              size="icon"
              className="text-gray-400 hover:text-white hover:bg-gray-700/50 w-8 h-8 sm:w-10 sm:h-10"
              onClick={() =>
                window.open(portfolioData.contact.github, "_blank")
              }
            >
              <Github className="w-4 h-4 sm:w-5 sm:h-5" />
            </Button>
            <Button
              variant="ghost"
              size="icon"
              className="text-gray-400 hover:text-white hover:bg-gray-700/50 w-8 h-8 sm:w-10 sm:h-10"
              onClick={() =>
                window.open(portfolioData.contact.linkedin, "_blank")
              }
            >
              <Linkedin className="w-4 h-4 sm:w-5 sm:h-5" />
            </Button>
            <Button
              variant="ghost"
              size="icon"
              className="text-gray-400 hover:text-white hover:bg-gray-700/50 w-8 h-8 sm:w-10 sm:h-10"
              onClick={() =>
                window.open(`mailto:${portfolioData.contact.email}`)
              }
            >
              <Mail className="w-4 h-4 sm:w-5 sm:h-5" />
            </Button>
          </div>
        </div>

        {/* Messages Container - Responsive padding and height */}
        <div
          className="flex-1 overflow-y-auto p-3 sm:p-6 space-y-4 sm:space-y-6"
          style={{ height: "calc(100vh - 180px)" }}
        >
          {messages.map((message) => (
            <div
              key={message.id}
              className={`flex ${
                message.sender === "user" ? "justify-end" : "justify-start"
              }`}
            >
              <div className="flex items-start gap-2 sm:gap-3 max-w-[90%] sm:max-w-[85%]">
                {message.sender === "bot" && (
                  <Avatar className="w-6 h-6 sm:w-8 sm:h-8 mt-1 ring-1 ring-blue-500/30 flex-shrink-0">
                    <AvatarImage src="/placeholder.svg?height=32&width=32" />
                    <AvatarFallback className="bg-gradient-to-br from-blue-500 to-purple-600 text-white text-xs">
                      MM
                    </AvatarFallback>
                  </Avatar>
                )}
                <div
                  className={`rounded-2xl px-3 sm:px-5 py-3 sm:py-4 shadow-lg ${
                    message.sender === "user"
                      ? "bg-gradient-to-r from-blue-600 to-blue-700 text-white"
                      : "bg-gray-800/80 backdrop-blur-sm text-gray-100 border border-gray-700/50"
                  }`}
                >
                  {renderMessageContent(message)}
                  <p className="text-xs opacity-60 mt-2">
                    {message.timestamp.toLocaleTimeString([], {
                      hour: "2-digit",
                      minute: "2-digit",
                    })}
                  </p>
                </div>
              </div>
            </div>
          ))}

          {isTyping && (
            <div className="flex justify-start">
              <div className="flex items-start gap-2 sm:gap-3">
                <Avatar className="w-6 h-6 sm:w-8 sm:h-8 mt-1 ring-1 ring-blue-500/30">
                  <AvatarImage src="/placeholder.svg?height=32&width=32" />
                  <AvatarFallback className="bg-gradient-to-br from-blue-500 to-purple-600 text-white text-xs">
                    MM
                  </AvatarFallback>
                </Avatar>
                <div className="bg-gray-800/80 backdrop-blur-sm rounded-2xl px-3 sm:px-5 py-3 sm:py-4 border border-gray-700/50">
                  <div className="flex space-x-1">
                    <div className="w-2 h-2 bg-blue-400 rounded-full animate-bounce" />
                    <div
                      className="w-2 h-2 bg-blue-400 rounded-full animate-bounce"
                      style={{ animationDelay: "0.1s" }}
                    />
                    <div
                      className="w-2 h-2 bg-blue-400 rounded-full animate-bounce"
                      style={{ animationDelay: "0.2s" }}
                    />
                  </div>
                </div>
              </div>
            </div>
          )}
          <div ref={messagesEndRef} />
        </div>

        {/* Quick Actions - Mobile responsive with toggle */}
        <div className="px-3 sm:px-6 pb-2 sm:pb-4">
          <div className="sm:hidden mb-2">
            <Button
              variant="outline"
              size="sm"
              onClick={() => setShowQuickActions(!showQuickActions)}
              className="w-full bg-gray-800/50 border-gray-600 text-gray-300 hover:bg-gray-700/50 hover:text-white hover:border-blue-500/50"
            >
              {showQuickActions ? (
                <>
                  <X className="w-4 h-4 mr-2" />
                  Hide Quick Actions
                </>
              ) : (
                <>
                  <Menu className="w-4 h-4 mr-2" />
                  Show Quick Actions
                </>
              )}
            </Button>
          </div>
          
          <div className={`${showQuickActions ? 'flex' : 'hidden'} sm:flex flex-wrap gap-2 justify-center`}>
            {quickActions.map((action) => {
              const IconComponent = action.icon;
              return (
                <Button
                  key={action.label}
                  variant="outline"
                  size="sm"
                  onClick={() => handleSendMessage(action.query)}
                  className="bg-gray-800/50 border-gray-600 text-gray-300 hover:bg-gray-700/50 hover:text-white hover:border-blue-500/50 text-xs sm:text-sm flex-shrink-0"
                >
                  <IconComponent className="w-3 h-3 sm:w-4 sm:h-4 mr-1 sm:mr-2" />
                  {action.label}
                </Button>
              );
            })}
          </div>
        </div>

        {/* Enhanced Input - Mobile responsive */}
        <div className="p-3 sm:p-6 bg-gray-800/90 backdrop-blur-md border-t border-gray-700/50">
          <div className="flex gap-2 sm:gap-3">
            <Input
              ref={inputRef}
              value={inputValue}
              onChange={(e) => setInputValue(e.target.value)}
              onKeyPress={handleKeyPress}
              placeholder="Ask me about my skills, projects, or experience..."
              className="flex-1 bg-gray-700/50 border-gray-600 text-white placeholder-gray-400 focus:border-blue-500 focus:ring-1 focus:ring-blue-500/50 rounded-xl text-sm sm:text-base"
            />
            <Button
              onClick={() => handleSendMessage()}
              disabled={!inputValue.trim()}
              className="bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800 rounded-xl px-4 sm:px-6"
            >
              <Send className="w-4 h-4 sm:w-5 sm:h-5" />
            </Button>
          </div>
          <p className="text-gray-500 text-xs mt-2 sm:mt-3 text-center">
            💡 <span className="sm:hidden">Use quick actions or ask me anything!</span>
            <span className="hidden sm:inline">Try the quick actions above or ask me anything about my development journey!</span>
          </p>
        </div>
      </div>
    </div>
  );
}