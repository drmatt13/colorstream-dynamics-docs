import { useState, useEffect } from "react";
import { MD5 } from "crypto-js";

import KinesisDiagram from "./KinesisDiagram";

function generateMD5Hash(input: string): string {
  if (input === "") {
    return "";
  }
  return MD5(input).toString();
}

function allocateToShard(md5hash: string, totalShards: number): number {
  const hashBigInt = BigInt("0x" + md5hash);
  const maxMd5 = BigInt("0xffffffffffffffffffffffffffffffff");
  const segmentRange = maxMd5 / BigInt(totalShards);
  const partition = hashBigInt / segmentRange;
  return Number(partition) + 1;
}

function generateRandomPartitionKey(): string {
  const terms = [
    "Nova",
    "Stream",
    "Kernel",
    "Sensor",
    "Analytics",
    "Bandwidth",
    "Cloud",
    "Daemon",
    "Endpoint",
    "Firewall",
    "Gateway",
    "Hyperlink",
    "Interface",
    "Blaze",
    "Latency",
    "Middleware",
    "Node",
    "Oracle",
    "Protocol",
    "Query",
    "Router",
    "Scalability",
    "Thread",
    "Maple",
    "Virtual",
    "Webhook",
    "Quartz",
    "Ember",
    "Gale",
    "Accelerometer",
    "Pixel",
    "Array",
    "Cache",
    "Delta",
    "Ethernet",
    "Framework",
    "Grid",
    "Hash",
    "Instance",
    "Black",
    "Ticket",
    "Logic",
    "Matrix",
    "Nebula",
    "Opcode",
    "Pipeline",
    "Quantum",
    "Repository",
    "Synergy",
    "Token",
    "Vector",
    "Telematics",
  ];

  // Helper function to get a random index for the terms array
  const getRandomIndex = (max: number) => Math.floor(Math.random() * max);

  // Select two random, distinct terms
  let firstTermIndex = getRandomIndex(terms.length);
  let secondTermIndex = getRandomIndex(terms.length);

  // Ensure that the two terms are different
  while (firstTermIndex === secondTermIndex) {
    secondTermIndex = getRandomIndex(terms.length);
  }

  const partitionKey = `${terms[firstTermIndex]}${terms[secondTermIndex]}`;
  return partitionKey;
}

const HashCalculator = () => {
  const [hash, setHash] = useState<string>("");
  const [shard, setShard] = useState<number>(0);
  const [totalShards, setTotalShards] = useState<number>(10);
  const [partitionKey, setPartitionKey] = useState<string>(
    generateRandomPartitionKey()
  );

  useEffect(() => {
    setHash(generateMD5Hash(partitionKey));
  }, [partitionKey]);

  useEffect(() => {
    if (hash.length === 0) return;
    setShard(allocateToShard(hash, totalShards));
  }, [hash, totalShards]);

  return (
    <>
      <div className="w-full h-full flex flex-col-reverse sm:flex-row sm:justify-between lg:justify-around items-center">
        {/* *************************************************************** */}
        <div className="w-[52.5%] sm:w-[35%] md:w-[32.5%] lg:w-[30%] flex flex-col justify-between relative text-[.8rem] lg:text-sm">
          <label className="mb-1">MD5 Hash:</label>
          <div className="bg-gray-200 py-1.5 px-2.5 rounded-md truncate">
            {hash.length === 0 ? (
              <div className="pointer-events-none opacity-0">{"no hash"}</div>
            ) : (
              <>{hash}</>
            )}
          </div>
          <label htmlFor="partitionkey" className="mb-1 mt-2">
            Partition Key:
          </label>
          <input
            type="text"
            id="partitionkey"
            value={partitionKey}
            onChange={(e) => setPartitionKey(e.target.value)}
            className="py-1.5 px-2.5 rounded-md outline outline-1 outline-black focus:outline-2 focus:outline-blue-400"
          />
          <button
            onClick={() => setPartitionKey(generateRandomPartitionKey())}
            className="mt-2.5 py-2.5 text-xs rounded-md bg-blue-500 text-center text-white cursor-pointer hover:bg-blue-400"
          >
            Randomize partition key
          </button>
          <div className="mt-2">
            Shard Count:<span className="ml-2.5">{totalShards}</span>
          </div>
          <div className="mt-1 w-full h-6">
            <input
              className="w-full h-full bg-black/0 outline-none"
              type="range"
              step={1}
              min={1}
              max={100}
              onChange={(e) => setTotalShards(Number(e.target.value))}
              value={totalShards}
            />
          </div>
        </div>
        {/* *************************************************************** */}
        <div className="my-2.5 mb-7 sm:my-0 sm:mb-0 w-[95%] max-w-sm sm:max-w-none sm:w-[57.5%] lg:w-[60%] h-36 sm:h-36 lg:h-52 flex">
          <KinesisDiagram />
        </div>
      </div>
      <div className="w-full mt-5 sm:mt-10 flex justify-center items-center">
        <div className="mt-2 italic text-sm lg:text-md">
          {hash.length === 0 ? (
            <div className="pointer-events-none opacity-0">{"no hash"}</div>
          ) : (
            <div className="text-xs sm:text-sm">
              {hash} {"->"} Shard {shard}
            </div>
          )}
        </div>
      </div>
    </>
  );
};

export default HashCalculator;
