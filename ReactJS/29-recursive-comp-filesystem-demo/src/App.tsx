import {
  DocumentIcon,
  FolderIcon,
  ChevronRightIcon,
  ChevronDownIcon,
} from "@heroicons/react/24/solid";
import { useState } from "react";

type FileSystemNode = {
  name: string;
  type: "folder" | "file";
  children?: FileSystemNode[];
};

const fileSystem: FileSystemNode[] = [
  {
    name: "Movies",
    type: "folder",
    children: [
      {
        name: "Action",
        type: "folder",
        children: [
          { name: "The Dark Knight.mp4", type: "file" },
          { name: "Mission Impossible.mp4", type: "file" },
        ],
      },
      {
        name: "Comedy",
        type: "folder",
        children: [
          { name: "The Hangover.mp4", type: "file" },
          { name: "The Hangover Part 2.mp4", type: "file" },
        ],
      },
    ],
  },
  {
    name: "Music",
    type: "folder",
    children: [
      {
        name: "Rock",
        type: "folder",
        children: [
          { name: "The Beatles.flac", type: "file" },
          { name: "The Rolling Stones.flac", type: "file" },
        ],
      },
      {
        name: "Pop",
        type: "folder",
        children: [
          { name: "Michael Jackson.flac", type: "file" },
          { name: "Madonna.flac", type: "file" },
        ],
      },
    ],
  },
  {
    name: "Anime",
    type: "folder",
    children: [
      {
        name: "Shonen",
        type: "folder",
        children: [
          { name: "Jujutsu Kaisen.mp4", type: "file" },
          { name: "Chainsaw Man.mp4", type: "file" },
        ],
      },
    ],
  },
  {
    name: "Passwords.txt",
    type: "file",
  },
];

function App() {
  return (
    <div className="mx-auto max-w-sm p-8">
      <ul className="pl-6">
        {fileSystem.map((node) => (
          <FileSystemItem node={node} key={node.name} />
        ))}
      </ul>
    </div>
  );
}

function FileSystemItem({ node }: { node: FileSystemNode }) {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <ul className="pl-6">
      <li className="my-1.5" key={node.name}>
        <span
          className="flex items-center gap-1.5"
          onClick={() => {
            setIsOpen(!isOpen);
          }}
        >
          {node.type === "folder" &&
            node.children?.length! > 0 &&
            (isOpen ? (
              <ChevronDownIcon className="w-3 h-3 text-gray-500" />
            ) : (
              <ChevronRightIcon className="w-3 h-3 text-gray-500" />
            ))}
          {node.type === "folder" ? (
            <FolderIcon className="w-5 h-5 text-blue-400 " />
          ) : (
            <DocumentIcon className="w-5 h-5 text-gray-500 ml-4" />
          )}
          <p className="">{node.name}</p>
        </span>
        {isOpen &&
          node.children &&
          node.children.length > 0 &&
          node.children.map((node: FileSystemNode) => (
            <FileSystemItem node={node} key={node.name} />
          ))}
      </li>
    </ul>
  );
}

export default App;
