"use client";

import { useEffect } from "react";

import HashCalculator from "./components/HashCalculator";
import BeforeAndAfter from "./components/BeforeAndAfter";

/* eslint-disable @next/next/no-img-element */

export default function Home() {
  useEffect(() => {
    preloadImages();
  }, []);

  const preloadImages = () => {
    const imageUrls = [
      "/fanout2.drawio.png",
      "/SplittingAndMerging5.drawio.png",
      "/SplittingAndMerging3.drawio.png",
    ];

    imageUrls.forEach((url) => {
      const img = new Image();
      img.src = url;
    });
  };

  return (
    <>
      <div className="w-full flex flex-col items-center text-sm sm:text-base">
        <h1 className="text-lg lg:text-2xl font-bold mb-2.5">
          ColorStream Dynamics
        </h1>
        <h2 className="text-sm lg:text-md mb-10 opacity-75">
          A Real-Time Data Processing and Visualization System
        </h2>
        <video
          src="/kinesis.mp4"
          controls={true}
          className="w-full max-w-2xl aspect-video"
        ></video>
        <a
          href="https://github.com/drmatt13/ColorStream-Dynamics"
          className="text-blue-600 hover:underline cursor-pointer mt-8 text-base lg:text-xl visited:text-purple-600"
        >
          GitHub Repository
        </a>
        {/* ********************************************* */}

        <div className="mt-6 max-w-[90vw] w-full text-sm lg:text-md">
          <p>
            {'"'}ColorStream Dynamics{'"'} is an in-depth exploration of AWS
            Kinesis Data Streams, designed to break down its core
            functionalities and strategic deployment methodologies for effective
            data streaming. This project is structured in two phases: first, a
            comprehensive breakdown of the Kinesis Data Streams service, and
            second, a detailed analysis of the accompanying project that
            demonstrates a live implementation.
          </p>
          <p className="mt-6">
            The first section establishes a strong foundation by examining
            Kinesis Data Streams{"'"} fundamental components, including shards,
            data retention policies, and retrieval strategies. It also delves
            into critical operational metrics, such as throughput and rate
            limits—
            <span className="italic">
              essential for scaling and optimizing data flow
            </span>
            . A focused discussion on partition keys highlights their role in
            distributing data efficiently across the stream, emphasizing best
            practices to prevent bottlenecks and ensure high-performance
            streaming.
          </p>

          <p className="mt-6">
            Following this theoretical overview, the paper transitions into the
            practical implementation of ColorStream Dynamics, where the
            discussed concepts are applied in a structured project. This section
            contrasts manual polling techniques with automated Lambda triggers,
            providing insight into their respective advantages and ideal use
            cases. The architecture of the data stream is then examined in
            depth, offering a clearer understanding of its design and
            management.
          </p>
          <p className="mt-6">
            A defining feature of ColorStream Dynamics is its real-time
            visualization, where the frontend dynamically renders live data
            streaming and polling processes in action. Users can observe how
            records are ingested into and retrieved from the Kinesis Data
            Streams service, gaining a clear understanding of data flow
            mechanics. This interactive approach enhances comprehension while
            offering an intuitive way to monitor the system{"'"}s behavior under
            different workloads.
          </p>
          <p className="mt-6">
            By following the tutorial in the project{"'"}s GitHub repository,
            users can deploy ColorStream Dynamics themselves, experiencing
            firsthand the principles and practices detailed throughout the
            project. This hands-on approach reinforces key learning objectives,
            ensuring users not only understand the service but also develop the
            skills to implement and optimize it effectively in cloud-based
            architectures.
          </p>
        </div>
        {/* ********************************************* */}

        <h2 className="text-md lg:text-xl mt-12 mb-8 md:mt-14 md:mb-10 font-bold text-center">
          What is Kinesis Data Streams
        </h2>
        <div
          className="cursor-pointer bg-white"
          onClick={() => window.open("/kinesis.drawio.svg")}
        >
          <img src="/kinesis.drawio.png" alt="kinesis.drawio.png" />
        </div>
        <div className="mt-3 italic text-xs lg:text-sm">^ click to expand</div>
        <div className="max-w-[90vw] w-full text-sm lg:text-md ">
          <p className="mt-8">
            AWS Kinesis Data Streams is a real-time data streaming service
            designed to efficiently handle large volumes of data records. At its
            core are shards—
            <span className="italic">
              scalable, independently processed units of a stream that organize
              and store incoming data
            </span>
            . Each shard stores records in a sequential order, much like a
            linked list, where each record references the next, forming a
            continuous data stream. These records, which are data objects
            inserted into the stream, append to the end of this sequence in the
            order they arrive.
          </p>
          <p className="mt-6">
            Once stored in a shard, records are retained for 24 hours by
            default, extendable up to 7 days, which is critical for data
            recovery and processing strategies. The sequence of records is
            strictly forward-moving, meaning retrieval operations must follow
            this progression.
          </p>
          <p className="mt-8 font-semibold">
            Retrieving Data with the GetShardIterator and GetRecords method:
          </p>
          <p className="mt-6">
            To navigate through a shard{"'"}s sequence, Kinesis provides shard
            iterators—
            <span className="italic">
              temporary pointers that define the starting position for reading
              records from a shard
            </span>
            . These iterators are obtained using the GetShardIterator method
            from the Kinesis Data Streams SDK, and the iterator type determines
            where record retrieval begins.
          </p>
          <p className="mt-8 font-semibold">
            Iterator Types for GetShardIterator:
          </p>
          <ul className="list-disc mt-6 ml-6">
            <li>
              <span className="font-bold">TRIM_HORIZON:</span> Retrieves records
              starting from the oldest available record in the shard, ensuring
              all data is processed from the beginning.
            </li>
            <li className="mt-4">
              <span className="font-bold">AT_SEQUENCE_NUMBER:</span> Starts
              reading exactly at the specified SequenceNumber, providing precise
              control over data retrieval.
            </li>
            <li className="mt-4">
              <span className="font-bold">AFTER_SEQUENCE_NUMBER:</span> Starts
              reading immediately after the specified SequenceNumber, skipping
              that specific record.
            </li>
            <li className="mt-4">
              <span className="font-bold">LATEST:</span> Starts reading after
              the most recent record and waits for new incoming records,
              focusing on real-time data streaming.
            </li>
          </ul>
          <p className="mt-6">
            Once a shard iterator is obtained from using the GetShardIterator
            method, that iterator can then be used by the GetRecords method to
            read a batch of records from its specified starting position.
          </p>
          <p className="mt-8 font-semibold">
            The response from GetRecords contains:
          </p>
          <ul className="list-disc mt-6 ml-6">
            <li>
              A <span className="font-semibold">batch of records</span> (up to
              10MB or 1,000 records).
            </li>
            <li className="mt-4">
              A <span className="font-semibold">new shard iterator</span>{" "}
              (NextShardIterator) to continue reading more records.
            </li>
          </ul>
          <p className="pt-6">
            For applications that need to consume data in real-time or join a
            populated stream mid-flow, LATEST provides an efficient entry point.
            However, if using AT_SEQUENCE_NUMBER or AFTER_SEQUENCE_NUMBER, you
            must manually track and store sequence numbers, as they are required
            for resuming processing from a specific point. If a sequence number
            is lost or expires, reverting to TRIM_HORIZON ensures that
            processing restarts from the earliest available record, preventing
            data loss.
          </p>
          <p className="mt-8 font-semibold">Parallel Processing and Scaling:</p>
          <p className="mt-6">
            The architecture of Kinesis Data Streams is designed for parallel
            processing by distributing data across multiple shards. Each shard
            operates independently, allowing multiple consumers to read from
            different shards simultaneously.
          </p>
          <p className="mt-4 italic">
            By intelligently managing shard iterators and sequence numbers,
            applications can distribute processing workloads, ensuring that
            data-intensive applications can scale efficiently while maintaining
            low-latency real-time data streaming.
          </p>
          <h2 className="text-md lg:text-xl mt-12 mb-8 md:mt-14 md:mb-10 font-bold text-center">
            Shard Throughput Limits
          </h2>
          <div
            className="cursor-pointer mt-10 mx-auto"
            onClick={() => window.open("/kinesis limits.drawio.svg")}
          >
            <img
              src="/kinesis limits.drawio.png"
              alt="kinesis limits.drawio.png"
            />
          </div>
          <div className="w-full flex justify-center items-center">
            <div className="mt-3 italic text-xs lg:text-sm">
              ^ click to expand
            </div>
          </div>
          <p className="mt-8">
            Each shard within a Kinesis Data Stream serves as an independent
            unit of throughput, with fixed limits for both data ingestion
            (writes) and data retrieval (reads). These limits define how much
            data can be written to and read from a shard within a given time
            frame, making them a critical factor in stream design and
            scalability.
          </p>
          <p className="mt-6">
            For write operations, each shard supports up to 1,000 records per
            second or 1MB per second, whichever limit is reached first. These
            constraints enable developers to accurately forecast and provision
            their stream{"'"}s capacity based on expected data volume and record
            size. Exceeding this threshold results in throttling errors, as
            Kinesis enforces these limits to maintain system stability.
          </p>
          <p className="mt-6">
            For read operations, each shard can process up to 10,000 records per
            second or 2MB per second—
            <span className="italic">
              a limit shared among all consumers reading from that shard
            </span>
            . While a single GetRecords call can retrieve up to 10MB of data,
            the 2MB per second per shard limit still applies, meaning that
            retrieving a full 10MB in one request requires at least 5 seconds
            {"'"} worth of accumulated data from a single shard. This does not
            allow reading from multiple shards in parallel within a single
            GetRecords call; instead, each request is restricted to the data
            available within the specified shard at that moment.
          </p>
          <p className="mt-6">
            If multiple consumers are reading from the same shard, they must
            share the 2MB per second bandwidth, which can reduce the
            per-consumer data rate depending on the number of consumers polling.
            These enforced limits ensure predictable performance, preventing
            overload while maintaining scalability and integrity in real-time
            data processing with Kinesis Data Streams.
          </p>
          <p className="mt-6">
            To scale capacity, additional shards can be added to a Kinesis Data
            Stream. Since each shard has fixed throughput limits, an increase in
            data volume or read demand may lead to throttling or delayed
            processing if a single shard becomes a bottleneck. By adding more
            shards, both ingestion capacity and read concurrency are expanded,
            allowing multiple consumers to retrieve data from different shards
            in parallel without performance degradation. This shard-level
            scalability is essential for handling fluctuating data rates and
            growing workloads, ensuring efficient real-time processing while
            minimizing bottlenecks.
          </p>
          <h2 className="text-md lg:text-xl mt-12 mb-8 md:mt-14 md:mb-10 font-bold text-center">
            Partition Keys
          </h2>
          <div
            className="cursor-pointer mt-10 mx-auto"
            onClick={() => window.open("/partition-keys.drawio.svg")}
          >
            <img
              src="/partition-keys.drawio.png"
              alt="partition-keys.drawio.png"
            />
          </div>
          <div className="w-full flex justify-center items-center">
            <div className="mt-3 italic text-xs lg:text-sm">
              ^ click to expand
            </div>
          </div>
          <p className="mt-8">
            Partition keys are essential for distributing data evenly across
            shards in AWS Kinesis Data Streams. When a record is sent to a
            Kinesis stream, it is assigned a partition key, typically a string
            representing its source or category, such as {'"'}SalesOrder{'"'} or{" "}
            {'"'}UserActivityLog{'"'}. These keys categorize data while also
            determining how records are mapped to shards, ensuring balanced
            throughput and preventing bottlenecks in the streaming
            infrastructure.
          </p>
          <p className="mt-6">
            Each partition key is hashed using the MD5 algorithm, producing a
            128-bit hash value. This value is used to assign records to specific
            shards based on a range key mapping. Since MD5 produces a
            fixed-length hash, partition keys are distributed uniformly across
            available shards, ensuring that records with the same partition key
            always land in the same shard, preserving order within that
            category.
          </p>
          <p className="mt-6">
            However, poor partition key selection can lead to imbalanced data
            distribution. If partition keys have low cardinality (i.e., a small,
            repetitive set of keys), certain shards may receive a
            disproportionate amount of traffic—
            <span className="italic">a phenomenon known as hot sharding</span>.
            This can overload a single shard, creating a performance bottleneck
            and limiting the stream{"'"}s overall throughput.
          </p>
          <p className="mt-6 mb-8">
            To prevent this, high-cardinality partition keys—
            <span className="italic">
              meaning a diverse set of unique values
            </span>
            —are recommended. A wider distribution of hash values results in a
            more even data spread across all shards, reducing the risk of
            congestion. Additionally, resharding (splitting or merging shards)
            allows for scalable adjustments as data volume fluctuates, ensuring
            efficient processing for real-time analytics and decision-making.
          </p>
          <HashCalculator />
          <p className="mt-8">
            In summary, partition keys, their resultant MD5 hash values, and the
            high cardinality of these keys are fundamental for effective data
            distribution across shards in Kinesis Data Streams. Managing the
            number and size of shards through resharding allows for scalable and
            efficient processing of streaming data, facilitating the real-time
            analysis and decision-making capabilities of modern data-driven
            applications.
          </p>
          {/* ********************************************* */}
          <h2 className="text-md lg:text-xl mt-12 mb-8 md:mt-14 md:mb-10 font-bold text-center">
            The Record Distribution Process
          </h2>
          <p className="mt-8">
            AWS Kinesis Data Streams are designed to efficiently distribute
            incoming data by mapping partition key hashes to specific shards.
            Each shard is assigned a range of hash values, segmenting the data
            space to enable parallel processing and consistent data flow. This
            mapping mechanism ensures even workload distribution, while
            resharding allows the system to scale dynamically as throughput
            demands change.
          </p>
          <div
            className="cursor-pointer mt-10 mx-auto"
            onClick={() => window.open("/SplittingAndMerging1.drawio.svg")}
          >
            <img
              src="/SplittingAndMerging1.drawio.png"
              alt="SplittingAndMerging1.drawio.png"
            />
          </div>
          <div className="w-full flex justify-center items-center">
            <div className="mt-3 italic text-xs lg:text-sm">
              ^ click to expand
            </div>
          </div>
          <p className="mt-8">
            The diagram above illustrates how AWS Kinesis Data Streams allocate
            records and their partition key hash values across shards. A Lambda
            function dispatches data with various partition keys, which are then
            processed through the MD5 hashing algorithm. The resulting hash
            values fall into predetermined hash key ranges, each mapped to a
            specific shard. For instance, one shard may handle hash values from
            0–25% of the total hash space, the next from 25–50%, and so on. This
            systematic allocation helps balance the processing load across
            shards, promoting efficient throughput.
          </p>
          <p className="mt-6">
            However, despite this structured approach, hot sharding can still
            occur. This happens when multiple records share highly similar
            partition keys, causing their hash values to cluster within a narrow
            segment of the hash key space. As a result, a single shard may
            become overloaded, creating a bottleneck that limits stream
            performance. The visualization not only explains shard allocation
            mechanics but also underscores the importance of high-cardinality
            partition keys—
            <span className="italic">
              ensuring a broad distribution of hash values to prevent imbalances
              and maintain optimal performance
            </span>
            .
          </p>
          <h2 className="text-md lg:text-xl mt-12 mb-8 md:mt-14 md:mb-10 font-bold text-center">
            Shard Splitting
          </h2>
          <p className="mt-8">
            Shard splitting is a key scaling operation in AWS Kinesis Data
            Streams, enabling the stream to increase its data throughput
            capacity. This process divides a single shard into two or more new
            shards, effectively doubling ingestion and retrieval capacity.
            Splitting is necessary when a shard approaches its write limit (1
            MB/s or 1,000 records/s) or read limit (2 MB/s). Each resulting
            shard retains the same individual throughput limits as the original
            but collectively expands the stream{"'"}s overall capacity.
          </p>
          <BeforeAndAfter
            first="SplittingAndMerging2.drawio"
            second="SplittingAndMerging3.drawio"
            firstText="Split Shard"
            secondText="Revert"
          />
          <p className="mt-8">
            Before the split, as shown in the interactive diagram above, a shard
            is responsible for a specific range of MD5 hash values derived from
            partition keys. When the {'"'}Split Shard{'"'} button is pressed,
            the diagram updates to illustrate how this range is subdivided, with
            each new shard inheriting a portion of the original hash key range.
            Existing records remain in place and are not redistributed among the
            new shards. As a result, during the transitional period, records
            with the same partition key may appear in both the original and new
            shards. Users can toggle back to the pre-split state using the
            {'"'}Revert{'"'} button, visually demonstrating the shard{"'"}s
            transformation.
          </p>
          <p className="mt-6">
            This overlap requires clients to track multiple shards
            simultaneously to maintain a complete and ordered dataset. Over
            time, as new records are ingested, they will be routed exclusively
            to the newly created shards based on their updated hash key
            distribution. Consumers must account for this transition, ensuring
            their applications dynamically detect and process data from all
            active shards to avoid gaps in data retrieval and maintain sequence
            integrity.
          </p>
          <h2 className="text-md lg:text-xl mt-12 mb-8 md:mt-14 md:mb-10 font-bold text-center">
            Shard Merging
          </h2>
          <p className="mt-8">
            In AWS Kinesis Data Streams, shard merging is a deliberate
            scaling-down operation used to reduce the number of shards and
            manage stream resources more efficiently, especially when data
            volume decreases. Unlike splitting, which increases capacity by
            dividing shards, merging combines the hash key ranges of two shards
            into a single shard, consolidating throughput while lowering costs.
          </p>
          <BeforeAndAfter
            first="SplittingAndMerging4.drawio"
            second="SplittingAndMerging5.drawio"
            firstText="Merge Shards"
            secondText="Revert"
          />
          <p className="mt-8">
            The interactive diagram above visually represents the shard-merging
            process. Initially, the {'"'}Merge Shards{'"'} button displays the
            pre-merge state, where each shard independently manages a specific
            segment of the hash key range. The first diagram shows three shards,
            each responsible for a portion of the key space. When the merge
            operation is triggered, the diagram updates to illustrate how Shard
            1 and Shard 3 are combined in a noncontiguous merge, resulting in a
            newly merged shard that spans both 0%–33.3% and 66.6%–100% of the
            hash key space, leaving Shard 2 unaffected in the middle.
          </p>
          <p className="mt-6">
            Following the merge, Shard 3 stops receiving new records and becomes
            a closed shard. While it no longer accepts incoming data, it remains
            available for read requests until its records expire based on the
            stream{"'"}s retention policy. During this transition, consumers
            must adapt by reading from both the merged Shard 1 and closed Shard
            3 to ensure complete data retrieval. Once Shard 3{"'"}s retention
            period ends, it is permanently deleted, leaving behind a streamlined
            two-shard configuration that is more cost-effective and optimized
            for reduced data throughput. Users can revert to the pre-merge state
            by selecting the {'"'}Revert{'"'} button, providing a visual
            representation of the shard restructuring process.
          </p>

          {/* ********************************************* */}
          <h2 className="text-md lg:text-xl mt-12 mb-8 md:mt-14 md:mb-10 font-bold text-center">
            Enhanced Fan-Out
          </h2>
          <BeforeAndAfter
            smaller={true}
            first="fanout1.drawio"
            second="fanout2.drawio"
            firstText="Enable Enhanced Fan-Out"
            secondText="Revert"
          />
          <p className="mt-8">
            Enhanced Fan-Out in AWS Kinesis Data Streams enables parallel data
            consumption by providing each registered consumer with a dedicated
            2MB/s throughput per shard. This eliminates the contention for
            shared bandwidth, ensuring consistent, low-latency real-time
            processing. In traditional setups, multiple consumers reading from
            the same shard must share the 2MB/s limit, leading to variable data
            rates and potential lag. Enhanced Fan-Out bypasses this limitation,
            allowing each consumer to process streaming data in isolation
            without competing for throughput.
          </p>
          {/*  */}
          <p className="mt-6">
            The advantages of Enhanced Fan-Out are particularly significant in
            environments where different processes need to ingest and analyze
            the same data concurrently for different purposes. It is
            particularly advantageous in scenarios where real-time data
            processing is critical, such as in financial trading, interactive
            online platforms, or sophisticated analytics workflows. By ensuring
            an isolated stream of data for each consumer, Enhanced Fan-Out
            ensures that applications can operate at peak efficiency, processing
            and analyzing data as it arrives, without the overhead of managing
            throughput contention among multiple consumers.
          </p>
          <div
            className="cursor-pointer mt-10 mx-auto"
            onClick={() => window.open("/Enhanced Fan-Out.drawio.svg")}
          >
            <img
              src="/Enhanced Fan-Out.drawio.png"
              alt="Enhanced Fan-Out.drawio.png"
            />
          </div>
          <div className="w-full flex justify-center items-center">
            <div className="mt-2 italic text-xs lg:text-sm">
              ^ click to expand
            </div>
          </div>

          <p className="mt-8">
            The diagram above The interactive diagram illustrates how Enhanced
            Fan-Out adapts to varying throughput demands across different
            shards:
          </p>
          <ul className="list-disc mt-6 ml-6">
            <li>
              <span className="font-bold">Shard 3</span>, handling
              high-ingestion data near the 1MB/s write limit, benefits
              significantly from Enhanced Fan-Out. Consumers 1, 2, and 3 each
              receive a dedicated 2MB/s stream, enabling them to process the
              incoming data in real time without interference.
            </li>
            <li className="mt-4">
              <span className="font-bold">Consumer 4</span>, however, uses the
              standard shared throughput model. Since it is the only consumer
              reading from Shard 3, it effectively receives the full 2MB/s read
              capacity—
              <span className="italic">
                mirroring the benefits of Enhanced Fan-Out without incurring
                additional costs
              </span>
              . This setup demonstrates a cost-efficient approach, maximizing
              shard resources while balancing performance and expenses.
            </li>
          </ul>
          <p className="mt-6">
            For Shards 1 and 2, where ingestion rates are modest (0.15MB/s and
            0.1MB/s, respectively), the standard 2MB/s shared throughput is more
            than sufficient. In these cases, Enhanced Fan-Out is unnecessary, as
            consumers can access data efficiently without added expense. This
            illustrates how matching the consumption model to the actual data
            throughput ensures both cost efficiency and performance
            optimization.
          </p>
          <p className="mt-6">
            To prevent potential bottlenecks, two proactive strategies can be
            considered:
          </p>
          <ol className="list-decimal mt-6 ml-6">
            <li>
              <span className="font-bold">Shard Splitting</span> – If Shards 1
              and 2 are expected to see increased data volume, preemptively
              splitting them would preserve high throughput and prevent
              congestion.
            </li>
            <li className="mt-4">
              <span className="font-bold">Scaling Enhanced Fan-Out</span> –
              Instead of modifying shard structure, additional Enhanced Fan-Out
              consumers can be introduced to accommodate higher read demands
              without altering the shard count.
            </li>
          </ol>
          <p className="mt-6">
            The strategic use of Enhanced Fan-Out, as seen with Shard 3, is
            ideal for latency-sensitive applications that require immediate data
            availability and high-volume concurrent processing. In such cases,
            the added cost is justified by the need for consistent, real-time
            data access.
          </p>
          <p className="mt-6">
            Ultimately, the diagram and strategies emphasize the importance of
            tailoring the consumption model to each shard{"'"}s data throughput.
            By selectively applying Enhanced Fan-Out where necessary and
            leveraging shared throughput when sufficient, organizations can
            optimize Kinesis stream performance, control costs, and scale
            effectively as data volumes grow.
          </p>
          {/* ********************************************* */}
          <h2 className="text-md lg:text-xl mt-12 mb-8 md:mt-14 md:mb-10 font-bold text-center">
            Manually Polling Records
          </h2>
          <div
            className="w-[95%] cursor-pointer mt-10 mx-auto"
            onClick={() => window.open("/lambda to kinesis.drawio.svg")}
          >
            <img
              src="/lambda to kinesis.drawio.png"
              alt="lambda to kinesis.drawio.png"
            />
          </div>
          <div className="w-full flex justify-center items-center">
            <div className="mt-3 italic text-xs lg:text-sm">
              ^ click to expand
            </div>
          </div>
          <p className="mt-8">
            Manually polling AWS Kinesis Data Streams requires direct
            interaction with a stream{"'"}s shard architecture and careful
            iterator management to ensure efficient data retrieval. As
            illustrated in the diagram above, the process involves three key
            steps, each using an SDK method from AWS{"'"}s Kinesis Library to
            interact with the stream:
          </p>
          <ol className="list-decimal mt-6 ml-6">
            <li>
              <p>
                <span className="font-semibold">ListShards:</span> Retrieves
                metadata about all shards in a stream, including their ShardId,
                which is necessary to direct read operations.
              </p>
              <ul className="list-disc ml-6">
                <li className="mt-4">
                  This step is typically used when discovering shards for the
                  first time.
                </li>
                <li className="mt-4">
                  If the ShardId is already known from a previous operation,
                  this step can be bypassed.
                </li>
                <li className="mt-4">
                  If working with sequence numbers extracted from records,
                  ListShards is not required at all, since sequence numbers
                  inherently encode the shard they belong to.
                </li>
              </ul>
            </li>
            <li className="mt-6">
              <p>
                <span className="font-semibold">GetShardIterator:</span> Obtains
                a shard iterator for a specific shard, which acts as a pointer
                to a starting position within the shard{"'"}s sequence of
                records. The iterator type determines where reading begins...
              </p>
              <ul className="list-disc ml-6">
                <li className="mt-4">
                  For TRIM_HORIZON and LATEST, a ShardId is required since
                  Kinesis needs to know which shard to begin polling from.
                </li>
                <li className="mt-4">
                  For AT_SEQUENCE_NUMBER and AFTER_SEQUENCE_NUMBER, the ShardId
                  is not needed, as the sequence number itself determines the
                  exact record position within its respective shard.
                </li>
                <li className="mt-4">
                  If a valid shard iterator is already available from a previous
                  GetShardIterator call, this step can be skipped, allowing
                  GetRecords to continue polling without reinitializing.
                </li>
              </ul>
            </li>
            <li className="mt-6">
              <p>
                <span className="font-semibold">GetRecords:</span> Uses the
                obtained shard iterator to fetch data records from the shard,
                returning both a batch of records (up to 10MB or 1,000 records)
                and a new shard iterator for subsequent polling.
              </p>
              <ul className="list-disc ml-6">
                <li className="mt-4">
                  The application should store and reuse the NextShardIterator
                  from the response to avoid unnecessarily invoking
                  GetShardIterator again.
                </li>
              </ul>
            </li>
          </ol>
          <div
            className="cursor-pointer w-full lg:w-[70%] mt-10 mx-auto"
            onClick={() => window.open("/manually polled json.png")}
          >
            <img
              src="/manually polled json.png"
              alt="manually polled json.png"
            />
          </div>
          <div className="w-full flex justify-center items-center">
            <div className="mt-3 italic text-xs lg:text-sm">
              ^ click to expand
            </div>
          </div>
          <p className="mt-8 italic">
            The image above presents the typical JSON response from using the
            GetRecords method to poll an AWS Kinesis Data Stream. The response
            contains essential information for processing the retrieved records.
          </p>
          <p className="mt-8">
            <span className="font-semibold">
              Understanding the GetRecords payload:
            </span>
          </p>
          <ul className="list-disc mt-6 ml-6">
            <li>
              <span className="font-bold">Records Array:</span>
            </li>
          </ul>
          <ul className="list-disc ml-12">
            <li className="mt-4">
              <span className="font-bold">SequenceNumber</span> is a permanent
              identifier used for tracking and resuming processing at a specific
              record.
            </li>
            <li className="mt-4">
              <span className="font-bold">ApproximateArrivalTimestamp</span> is
              a timestamp indicating when the record was ingested into the
              stream.
            </li>
            <li className="mt-4">
              <span className="font-bold">Data</span> The Base64-encoded message
              payload.
            </li>
            <li className="mt-4">
              <span className="font-bold">PartitionKey</span> is the identifier
              used for routing records to shards.
            </li>
          </ul>
          <ul className="list-disc mt-6 ml-6">
            <li className="mt-6 ">
              <span className="font-bold">NextShardIterator</span> is an updated
              iterator that can be used to continue polling the shard, ensuring
              that the next batch of records is retrieved sequentially.
            </li>
            <li className="mt-6">
              <span className="font-bold">MillisBehindLatest</span> indicates
              the delay between the current time and the latest record ingestion
              time, helping monitor stream lag.
            </li>
          </ul>
          <p className="mt-8 font-semibold">Polling Strategies:</p>
          <p className="mt-6">
            For EC2-based applications, polling is typically implemented in a
            continuous loop, using the NextShardIterator to continuously fetch
            the next batch of records in real time. If no new data is available,
            the application waits and retries within the iterator{"'"}s active
            window to prevent expiration.
          </p>
          <p className="mt-6">
            For AWS Lambda, manual polling is impractical due to its stateless
            nature and execution time limits. Instead, event-driven triggers
            (e.g., AWS EventBridge) automatically process batches of records as
            they arrive.
          </p>
          <p className="mt-6">
            To ensure fault tolerance and maintain data continuity, applications
            should persist the last successfully processed SequenceNumber in a
            durable data store such as DynamoDB, Redis, or any reliable database
            before each GetRecords request. This checkpointing mechanism allows
            the application to resume exactly where it left off in the event of
            a crash, restart, or network failure rather than reprocessing old
            records or missing unprocessed ones.
          </p>
          <p className="mt-6">
            Without storing the SequenceNumber, an application might be forced
            to start over from TRIM_HORIZON, leading to redundant data
            processing, or from LATEST, potentially skipping critical data. By
            maintaining this checkpoint in a low-latency, persistent storage
            solution, applications eliminate duplicate processing, minimize data
            loss, and ensure an accurate, ordered flow of real-time events,
            providing a resilient and efficient Kinesis Data Streams consumption
            strategy.
          </p>
          <h2 className="text-md lg:text-xl mt-12 mb-8 md:mt-14 md:mb-10 font-bold text-center">
            Kinesis Lambda Triggers
          </h2>
          <div
            className="cursor-pointer pt-2.5 pb-1 mt-10 mx-auto"
            onClick={() => window.open("/trigger.drawio.svg")}
          >
            <img src="/trigger.drawio.png" alt="trigger.drawio.png" />
          </div>
          <div className="w-full flex justify-center items-center">
            <div className="mt-3 italic text-xs lg:text-sm">
              ^ click to expand
            </div>
          </div>
          <p className="mt-8">
            AWS Kinesis Data Streams can natively integrate with AWS Lambda,
            enabling event-driven data processing and eliminating the need for
            manual polling. When a Kinesis stream is configured as a Lambda
            event source, the function triggers automatically as new data
            arrives. This setup facilitates real-time data ingestion,
            transformation, and analysis, providing an efficient alternative to
            continuously polling the stream. By leveraging this integration,
            applications can process streaming data with low latency,
            automatically scale with incoming traffic, and minimize
            infrastructure overhead.
          </p>
          <p className="mt-8 font-semibold">
            How Lambda Consumes Kinesis Data Streams:
          </p>
          <p className="mt-6">
            Unlike manual polling, where applications must actively retrieve
            data using GetShardIterator and GetRecords, Lambda automatically
            manages the consumption process by subscribing to the Kinesis Data
            Stream and processing new records as they arrive. This integration
            streamlines the architecture by:
          </p>
          <ul className="list-disc ml-6">
            <li className="mt-4">
              Eliminating the need to track shard iterators.
            </li>
            <li className="mt-4">
              Handling scaling automatically based on incoming data volume.
            </li>
            <li className="mt-4">
              Reducing operational complexity by removing the need for
              persistent worker infrastructure.
            </li>
          </ul>
          <p className="mt-8 font-semibold">
            When a Kinesis Data Stream is designated as an event source, AWS
            Lambda:
          </p>
          <ol className="list-decimal ml-6">
            <li className="mt-4 ">
              Continuously monitors the stream for new records.
            </li>
            <li className="mt-4 ">
              Automatically batches records for efficient processing.
            </li>
            <li className="mt-4 ">
              Invokes the associated Lambda function, passing the batched
              records as an event payload.
            </li>
          </ol>
          <div
            className="cursor-pointer w-full lg:w-[70%] mt-10 mx-auto"
            onClick={() => window.open("/trigger event json.png")}
          >
            <img src="/trigger event json.png" alt="trigger event json.png" />
          </div>
          <div className="w-full flex justify-center items-center">
            <div className="mt-3 italic text-xs lg:text-sm">
              ^ click to expand
            </div>
          </div>
          <p className="mt-8 italic">
            The image above displays a sample JSON event payload passed to a
            Lambda function by a Kinesis Data Stream trigger. This payload
            contains essential information for processing the incoming records.
          </p>
          <p className="mt-8 font-semibold">
            Understanding the Kinesis Event Payload:
          </p>
          <ul className="list-disc ml-6">
            <li className="mt-4">
              <span className="font-semibold">PartitionKey:</span> Identifies
              how records are distributed across shards
            </li>
            <li className="mt-4">
              <span className="font-semibold">SequenceNumber:</span> A unique
              identifier for each record, useful for tracking order.
            </li>
            <li className="mt-4">
              <span className="font-semibold">Data:</span> The base64-encoded
              payload containing the actual message content.
            </li>
            <li className="mt-4">
              <span className="font-semibold">
                ApproximateArrivalTimestamp:
              </span>{" "}
              The timestamp indicating when the record was ingested into
              Kinesis.
            </li>
            <li className="mt-4">
              <span className="font-semibold">EventSourceARN:</span> The ARN of
              the Kinesis Data Stream that triggered the Lambda function.
            </li>
            <li className="mt-4">
              <span className="font-semibold">EventID:</span> A unique
              identifier for the event.
            </li>
          </ul>
          <p className="mt-6">
            By processing records in batches, Lambda can reduce API calls,
            optimize compute resources, and enable efficient bulk processing
            rather than handling individual records in isolation.
          </p>
          <p className="mt-8 font-semibold">
            Batch Processing and Performance Considerations:
          </p>
          <p className="mt-6">
            Kinesis triggers in Lambda operate on a batch window model, where
            records are buffered before invocation based on:
          </p>
          <ul className="list-disc ml-6">
            <li className="mt-4">
              <span className="font-semibold">Batch Size:</span> The maximum
              number of records in a single function invocation.
            </li>
            <li className="mt-4">
              <span className="font-semibold">Batch Window:</span> The maximum
              time to wait before invoking the function, even if the batch size
              is not met.
            </li>
          </ul>
          <p className="mt-6">
            Properly tuning these parameters helps balance latency, cost, and
            throughput, ensuring efficient processing while avoiding excessive
            invocations.
          </p>
          <p className="mt-8 font-semibold">Scaling and Parallel Processing:</p>
          <p className="mt-6">
            Since each shard in a Kinesis Data Stream is processed
            independently, Lambda creates one concurrent execution per shard. If
            a stream has 10 shards, Lambda can execute up to 10 parallel
            function invocations, with each function processing records from a
            specific shard.
          </p>
          <p className="mt-6">For higher data throughput:</p>
          <ul className="list-disc ml-6">
            <li className="mt-4">
              Increase the number of shards in the stream to allow greater
              parallelism.
            </li>
            <li className="mt-4">
              Use Enhanced Fan-Out if multiple consumers need to read the same
              data without contention.
            </li>
          </ul>
          <p className="mt-8 font-semibold">
            Fault Tolerance and Checkpointing:
          </p>
          <p className="mt-4 italic ml-2">
            – To ensure reliable event processing and prevent data loss
          </p>
          <ul className="list-disc ml-6">
            <li className="mt-4">
              Lambda automatically tracks sequence numbers, ensuring that
              records are processed in order.
            </li>
            <li className="mt-4">
              In case of failures, Lambda retries failed records until they
              expire based on the stream{"'"}s retention period.
            </li>
            <li className="mt-4">
              Dead Letter Queues (DLQs) can be configured to capture unprocessed
              records for debugging and reprocessing.
            </li>
          </ul>
          <p className="mt-8 font-semibold">
            Final Thoughts on Kinesis Lambda Triggers:
          </p>
          <p className="mt-6">
            Lambda{"'"}s integration with Kinesis Data Streams provides a fully
            managed, scalable solution for real-time data processing. By
            replacing manual polling with event-driven execution, applications
            can reduce complexity, improve scalability, and process data with
            minimal latency. Properly tuning batch size, concurrency, and fault
            tolerance mechanisms optimizes architecture performance, ensuring
            effective adaptation to dynamic streaming workloads.
          </p>
        </div>
        {/* ********************************************* */}

        <h2 className="text-md lg:text-xl mt-12 mb-8 md:mt-14 md:mb-10 font-bold text-center">
          App BackEnd Design
        </h2>
        <div
          className="cursor-pointer bg-white"
          onClick={() => window.open("/small architecture.drawio.svg")}
        >
          <img
            src="/small architecture.drawio.png"
            alt="small architecture.drawio.png"
          />
        </div>
        <div className="mt-3 italic text-xs lg:text-sm">^ click to expand</div>
        <div className="max-w-[90vw] w-full text-sm lg:text-md">
          <p className="mt-8">
            The backend architecture of ColorStream Dynamics is an integrated
            system leveraging AWS Lambda for compute, AWS Kinesis for real-time
            data streaming, and Amazon DynamoDB for persistent state tracking,
            all orchestrated through API Gateway. This serverless design ensures
            a highly scalable, resilient, and event-driven infrastructure
            capable of handling continuous data ingestion, processing, and
            storage with minimal operational overhead.
          </p>
          <p className="mt-6">
            At the core of this architecture, API Gateway serves as the primary
            interface, exposing two Lambda functions: SendData and PollData. The
            SendData function is responsible for ingesting records into Kinesis,
            where each record contains a color and an amount. Since the stream
            operates with a single shard, records are sequentially appended,
            ensuring that all data flows through a consistent pipeline without
            the complexity of multi-shard partitioning. This guarantees that
            record ordering remains intact, simplifying both retrieval and
            downstream processing.
          </p>
          <p className="mt-6">
            The PollData function is responsible for retrieving records from the
            Kinesis stream and follows a structured polling mechanism. It begins
            by checking DynamoDB for the last processed sequence number, which
            acts as a checkpoint, ensuring that each record is processed exactly
            once and in order. If a stored sequence number exists, PollData
            invokes GetShardIterator with the AfterSequenceNumber option,
            resuming data retrieval from the next unprocessed record. However,
            if no sequence number is found or the stored sequence number has
            expired due to the Kinesis retention period, PollData falls back to
            TrimHorizon, ensuring that processing restarts from the earliest
            available record to prevent data loss.
          </p>
          <p className="mt-6">
            Once a valid shard iterator is obtained, PollData fetches records
            using GetRecords, processing each batch in sequential order. As
            records are consumed, DynamoDB is updated with the latest sequence
            number, ensuring that it can resume exactly where it left off
            without duplicating data if the function is interrupted or
            restarted. If DynamoDB indicates that the stored sequence number has
            expired, the system reverts to TrimHorizon, allowing it to recover
            the lost state and ensuring continuous, uninterrupted processing.
          </p>
          <p className="mt-6">
            This iterative state management approach ensures adequate failover
            handling and fault tolerance. The system can gracefully handle
            expired sequence numbers, function restarts, or unexpected failures
            without manual intervention. Its ability to adjust dynamically based
            on data retention windows and processing state makes it highly
            adaptive, resilient, and self-healing.
          </p>
          <p className="mt-6">
            By leveraging event-driven serverless architecture, ColorStream
            Dynamics achieves high availability, optimal resource utilization,
            and automatic scalability. It adapts dynamically to fluctuating
            workloads while maintaining data integrity and processing
            efficiency. This self-correcting, resilient backend design ensures
            that even in the presence of failures or disruptions, the system
            remains stable, capable of handling real-time streaming workloads
            efficiently, and reliable in preserving the integrity of ingested
            data.
          </p>
        </div>
        {/* ********************************************* */}

        <h2 className="text-md lg:text-xl mt-12 mb-8 md:mt-14 md:mb-10 font-bold text-center">
          App FrontEnd Implementation
        </h2>
        <div
          className="cursor-pointer bg-white"
          onClick={() => window.open("/react.drawio.svg")}
        >
          <img src="/react.drawio.png" alt="react.drawio.png" />
        </div>
        <div className="mt-3 italic text-xs lg:text-sm">^ click to expand</div>
        <div className="max-w-[90vw] w-full text-sm lg:text-md">
          <p className="mt-8">
            The ColorStream Dynamics frontend is an interactive application that
            facilitates real-time data ingestion, streaming, and retrieval
            through AWS Kinesis Data Streams, with AWS Lambda functions acting
            as the intermediary between the frontend and the backend services.
            The system integrates AWS Lambda, API Gateway, Kinesis, and
            DynamoDB, providing a functional validation layer for the backend
            while offering an intuitive visualization of live data streams. This
            implementation ensures that the frontend does not interact directly
            with Kinesis but instead communicates through Lambda functions,
            which handle the ingestion and retrieval processes in a structured
            and secure manner.
          </p>
          <p className="mt-6">
            At the core of the interface, users interact with different Lambda
            buttons that each corresponds to unique data events. Clicking a
            button sends an API request to API Gateway, which subsequently
            invokes the SendData Lambda function. This function constructs a
            data payload in the format {`\`{ color, amount }\``} and injects it
            into the Kinesis Data Stream. The amount field is randomized to
            simulate dynamic, real-world data flow, ensuring that each data
            packet varies naturally, reinforcing the authenticity of the
            streaming process.
          </p>

          <p className="mt-6">
            To provide real-time visibility into this process, the frontend
            employs synchronized animations that visually represent data
            movement within AWS Kinesis. As data packets are sent, they are
            animated traveling from the Lambda function triggers to the Kinesis
            stream icon, accurately reflecting the asynchronous processing
            happening in the backend. This ensures users can see their data in
            motion, providing immediate feedback on ingestion status.
          </p>
          <p className="mt-6">
            On the retrieval side, the PollData Lambda function is invoked
            whenever users initiate a polling request. This function queries
            Kinesis using GetRecords, retrieves the latest batch of records, and
            forwards them back to the frontend. The UI then animates these
            retrieved records, displaying them in a color-coded sequence to
            match their original ingestion event. This mechanism ensures that
            users can visually track the lifecycle of data from the moment it is
            sent to Kinesis until it is retrieved for processing.
          </p>
          <p className="mt-6">
            By abstracting the direct interaction with Kinesis and instead
            leveraging Lambda as a broker, this architecture enforces security,
            scalability, and controlled access to the data stream. The frontend
            remains decoupled from Kinesis, reducing complexity while allowing
            for efficient, real-time data handling. This design demonstrates AWS
            Kinesis Data Streams in action and ensures a low-latency experience
            for users, making the streaming process both interactive and highly
            informative.
          </p>
        </div>
        {/* ********************************************* */}

        <h2 className="text-md lg:text-xl mt-12 mb-8 md:mt-14 md:mb-10 font-bold text-center">
          Architecture Deployment
        </h2>
        <div
          className="cursor-pointer bg-white"
          onClick={() => window.open("/sam-kinesis.drawio.svg")}
        >
          <img src="/sam-kinesis.drawio.png" alt="sam-kinesis.drawio.png" />
        </div>
        <div className="mt-3 italic text-xs lg:text-sm">^ click to expand</div>
        <div className="max-w-[90vw] w-full text-sm lg:text-md">
          <p className="pt-8">
            The deployment architecture for ColorStream Dynamics follows a
            structured, automated process that provisions both the frontend and
            backend components. The project is divided into two primary
            components: the React application, serving as the user interface,
            and the AWS Serverless Application Model (SAM) project, which
            defines and deploys the cloud-based backend infrastructure. This
            separation ensures modularity, allowing infrastructure and
            application logic to be independently managed while maintaining a
            tightly integrated system.
          </p>
          <p className="mt-6">
            Deployment begins with the AWS SAM framework orchestrating the
            backend infrastructure. Executing the {'"'}sam build command{'"'}{" "}
            compiles and packages the required cloud resources, followed by the
            {'"'}sam deploy command{'"'}, which launches the AWS Lambda
            functions, API Gateway, Kinesis Data Streams, and a DynamoDB table
            into the AWS environment. The use of AWS CloudFormation as the
            underlying infrastructure-as-code (IaC) mechanism ensures that
            deployments are consistent, repeatable, and scalable.
          </p>
          <p className="mt-6">
            Upon completion, CloudFormation outputs critical resource
            parameters, including the API Gateway URL and S3 bucket name
            required for frontend configuration. These values must be inserted
            into the .env file of the React application to establish proper
            connectivity with the backend. The frontend build process adheres to
            standard Node.js development workflows, beginning with the {'"'}npm
            install command{'"'} to install dependencies, followed by the {'"'}
            npm run build command{'"'} to generate the production-ready static
            assets.
          </p>
          <p className="mt-6">
            Once the frontend assets are prepared, they are deployed to AWS S3,
            which has been configured as a static website host via
            CloudFormation. Using the {'"'}aws s3 sync command{'"'}, the
            compiled React build is transferred to the designated S3 bucket,
            making the application publicly accessible. A custom Lambda function
            triggered as a CloudFormation custom resource automates critical
            lifecycle tasks such as setting bucket policies for public access
            and enabling static website hosting. Additionally, this function
            ensures that when the CloudFormation stack is deleted, the S3 bucket
            is emptied and removed, preventing orphaned resources and
            simplifying infrastructure cleanup.
          </p>
          <p className="mt-6">
            ColorStream Dynamics is more than just a technical demonstration of
            AWS Kinesis Data Streams—
            <span className="italic">
              it is a fully interactive and educational exploration of real-time
              streaming architectures
            </span>
            . Through a structured breakdown of Kinesis concepts, hands-on
            implementation, and real-time visualization, this project serves as
            both a learning tool and a practical foundation for scaling
            event-driven cloud applications. By leveraging AWS Lambda, API
            Gateway, Kinesis, and DynamoDB, the system achieves a
            well-architected, scalable, and automated solution for processing
            and visualizing real-time data. Whether for educational purposes or
            as a reference for production-grade cloud architectures, this
            project encapsulates the principles of high-performance streaming
            and cloud-native infrastructure. The modular design ensures
            extensibility, making it an excellent starting point for further
            innovations in serverless computing and event-driven data
            processing.
          </p>
        </div>
        {/* ********************************************* */}
      </div>
    </>
  );
}
