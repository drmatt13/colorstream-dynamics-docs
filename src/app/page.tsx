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
      <div className="w-full flex flex-col items-center pt-12 lg:pt-16 pb-10 md:pb-12 px-6 sm:px-10 text-sm sm:text-base">
        <h1 className="text-lg lg:text-2xl font-bold mb-2.5">
          ColorStream Dynamics
        </h1>
        <h2 className="text-sm lg:text-md mb-10 opacity-75">
          A Real-Time Data Processing and Visualization System
        </h2>
        <video
          src="/kinesis.mp4"
          controls={true}
          className="max-w-full md:w-[90%] lg:w-[75%]"
        ></video>
        <a
          href="https://github.com/drmatt13/ColorStream-Dynamics"
          className="text-blue-600 hover:underline cursor-pointer mt-8 text-base lg:text-xl visited:text-purple-600"
        >
          github repository
        </a>
        {/* ********************************************* */}

        <div className="mt-8 max-w-[90vw] w-full text-sm lg:text-md">
          <p>
            {'"'}ColorStream Dynamics{'"'} is an innovative venture into the
            world of AWS Kinesis Data Streams, providing a comprehensive
            analysis of its functional nuances and strategic deployment
            methodologies essential for proficient data management. This project
            commences with a detailed overview of Kinesis, highlighting the
            pivotal roles of shards, data retention periods, and the assorted
            strategies for data retrieval. As a deep dive into the AWS streaming
            service, it establishes a foundation for the subsequent detailed
            examination of the system.
          </p>
          <p className="mt-6">
            The narrative progresses to examine the throughput and rate limits,
            essential metrics that govern the flow of data, and the scalability
            of the service. Such metrics are critical for the adept
            orchestration of the data streaming service and for accommodating
            the evolving demands of data management. The project then explores
            the use of partition keys as a crucial aspect in distributing data
            across the stream, emphasizing the importance of their unique
            selection to optimize efficiency and avert potential data
            bottlenecks.
          </p>

          <p className="mt-6">
            A comparative analysis of manual polling methods versus automated
            Lambda triggers offers insights into the optimal scenarios for each
            approach, providing the reader with actionable information on their
            applicability in various operational contexts. This discussion leads
            to a more in-depth exploration of the data stream architecture,
            equipping the reader with an understanding of the service{`'`}s
            structure and management nuances.
          </p>
          <p className="mt-6">
            Central to ColorStream Dynamics is the visualization aspect, where
            data streaming processes are animated, offering a high-level
            representation of how data moves and is managed within the AWS
            ecosystem. This visual component serves not only as an educational
            tool but also as an engaging way to conceptualize the flow and
            handling of streamed data. The animations illuminate the abstract
            concepts of data streaming, making them accessible and relatable to
            a broader audience.
          </p>
          <p className="mt-6">
            This project encapsulates an all-encompassing approach to AWS
            Kinesis Data Streams, designed to impart a deep understanding of the
            service{`'`}s capabilities and best practices. By weaving together
            theoretical knowledge with practical examples, the project ensures a
            complete educational experience, positioning itself as an essential
            resource for anyone seeking to expand their knowledge of cloud-based
            data management and visualization. This comprehensive approach to
            the project illustrates the dynamic relationship between the various
            components of data streaming, providing clarity and insight into
            complex cloud infrastructures.
          </p>
          <p className="mt-6">
            By following the tutorial outlined in the readme of the project{`'`}
            s GitHub repository, users can deploy {`"`}ColorStream Dynamics{`"`}
            themselves, experiencing firsthand the principles and practices
            detailed throughout the project. This hands-on opportunity
            underscores the project{`'`}s intent to not only inform but also
            empower users to implement and manage their own AWS Kinesis Data
            Streams applications.
          </p>
        </div>
        {/* ********************************************* */}

        <h2 className="text-md lg:text-xl my-8 md:my-10 font-bold text-center">
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
            AWS Kinesis Data Streams is a robust, real-time data streaming
            service designed to handle large volumes of data records
            efficiently. Central to the service are {`"`}shards,{`"`} the
            fundamental building blocks that organize and store the incoming
            data. Each shard functions as a container, with its records
            structured in a sequence akin to a linked-list; each record points
            forward to the next, creating a continuous chain of data. These
            records, which are data objects inserted into the stream, append to
            the end of this linked-list in the order they arrive.
          </p>
          <p className="mt-6">
            Once in the shard, records are transiently preserved for a default
            time frame of 24 hours, extendable up to 7 days, which is critical
            for data recovery and processing strategies. The sequence of records
            is strictly forward-moving, which means retrieval operations must
            follow this forward progression. To navigate through this sequence,
            Kinesis provides four key methods, each associated with distinct
            starting points within the data stream:
          </p>
          <ul className="list-disc mt-6 ml-6">
            <li>
              <span className="font-bold">Trim Horizon:</span> This method
              positions the starting point at the oldest available record,
              enabling applications to begin processing from the earliest data
              in the shard, thus ensuring no record is overlooked.
            </li>
            <li className="mt-6">
              <span className="font-bold">At Sequence Number:</span> Opting for
              this method allows applications to initiate the retrieval process
              at a specific sequence number, giving precise control over the
              starting location within the data stream.
            </li>
            <li className="mt-6">
              <span className="font-bold">After Sequence Number:</span> Building
              on the previous method, this allows applications to start just
              beyond a designated sequence number, essentially skipping the
              specified record and beginning with the one that follows
            </li>
            <li className="mt-6">
              <span className="font-bold">Latest:</span> When real-time data
              processing is paramount, this method comes into play by setting
              the starting point immediately after the most recent record,
              thereby focusing on processing only newly incoming records
              henceforth.
            </li>
          </ul>
          <p className="mt-6">
            For applications that need to start consuming data in real-time or
            at a point where a stream is already populated, {`"`}Latest{`"`}{" "}
            provides an efficient entry point. However, it{`'`}s essential to
            manage sequence numbers with diligence. These numbers act as
            checkpoints that must be stored manually. If a sequence number is
            not tracked or if a tracked sequence number expires, reverting to
            the {`"`}Trim Horizon{`"`}
            ensures that processing recommences from the earliest point, thus
            safeguarding against data loss.
          </p>
          <p className="mt-6">
            This shard-based architecture facilitates not just data storage and
            retrieval but also enables high-level parallel processing across
            multiple shards. While the specifics of parallel processing will be
            explored further, it is the intelligent utilization of shards and
            their sequencing capabilities that lay the groundwork for
            distributing and processing streams at scale, ensuring that Kinesis
            can meet the demands of diverse data-intensive applications.
          </p>
          <h2 className="text-md lg:text-xl my-8 md:my-10 font-bold text-center">
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
            Each shard within an AWS Kinesis Data Stream is tailored to manage a
            certain volume of data throughput—capable of supporting write
            operations up to 1,000 records per second or 1MB per second,
            whichever threshold is met first. This precise limit empowers
            developers to effectively forecast and align their streams capacity
            with the expected volume of incoming data and the dimensions of the
            records inputted. Attempting to exceed this write threshold can
            result in errors, as Kinesis enforces these limits to prevent
            overloading a shard.
          </p>
          <p className="mt-8">
            On the egress side, each shard is designed to handle read operations
            up to 10,000 records per second or 2MB per second. Although a single
            `GetRecords` call can retrieve up to 10MB of data, such a request is
            constrained by the shard{`'`}s 2MB per second read limit,
            effectively throttling the data transfer and extending the retrieval
            time. If multiple consumers are polling from the same shard, they
            must share this 2MB per second bandwidth, dividing the throughput
            and potentially limiting the per-consumer data rate. These
            boundaries, set by AWS for both data ingestion and extraction, play
            a pivotal role in ensuring the high performance and integrity of
            data within Kinesis Data Streams, facilitating a scalable and
            reliable platform for real-time data analysis and processing across
            a broad range of applications.
          </p>
          <p className="mt-6">
            Adding more shards to an AWS Kinesis Data Stream is a key strategy
            for scaling the streams{"'"} capacity to accommodate increasing data
            volumes. Each shard has fixed throughput limits for both ingesting
            and retrieving data. As the volume of incoming data grows, or as the
            demand for read operations increases, these limits can become a
            constraint, potentially leading to throttling or delayed data
            processing. By adding more shards, you effectively increase the
            overall capacity of the stream - both in terms of the data it can
            handle per second and the volume of concurrent read operations it
            can support. This scaling is crucial in scenarios where data
            ingestion rates fluctuate or grow over time, ensuring that the
            stream can continue to process data efficiently without bottlenecks.
            Additionally, more shards mean greater parallelism in processing,
            allowing for more consumers to read from the stream simultaneously
            without impacting each other{`'`}s performance. This aspect of
            scalability is fundamental in Kinesis, making it a robust solution
            for handling large-scale, real-time data workloads in diverse
            applications.
          </p>
          <h2 className="text-md lg:text-xl my-8 md:my-10 font-bold text-center">
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
            Partition keys are essential for ensuring a balanced distribution of
            data across shards within AWS Kinesis Data Streams. When data is
            sent to a Kinesis stream, each record is paired with a partition
            key, usually a string that is indicative of the data{`'`}s source or
            its type, such as {`"`}SalesOrder{`"`} or {`"`}UserActivityLogger
            {`"`}. These keys not only categorize the data but also play a
            pivotal role in evenly distributing it across the stream{`'`}s
            shards. This helps prevent any single shard from becoming
            overloaded, thereby facilitating efficient and stable data
            processing across the streaming infrastructure.
          </p>
          <p className="mt-6">
            Each partition key is processed through the MD5 hash function to
            generate a unique 128-bit (16-byte) hash value. The MD5 algorithm is
            a well-established cryptographic hash function, renowned for
            creating distinct outputs for varied inputs. In the context of
            Kinesis, the MD5 hash value of the partition key is used to
            determine which shard the data will be assigned to. The hash value
            is a fixed length, which means it can uniformly distribute a large
            set of partition keys across the available shards. This ensures that
            records with the same partition key will always be directed to the
            same shard, preserving the order of records within a single source
            or category.
          </p>
          <p className="mt-6">
            An optimal distribution of data across shards is crucial for the
            performance of AWS Kinesis Data Streams. When the partition keys
            exhibit low cardinality, meaning they are not sufficiently varied,
            an imbalance in data distribution can occur. This imbalance often
            leads to a situation known as {`"`}hot sharding,{`"`} where a
            disproportionate number of records are funneled into a single shard.
            Such a scenario can overload the shard, turning it into a
            performance bottleneck and affecting the stream{`'`}s overall
            throughput.
          </p>
          <p className="mt-6 mb-8">
            To mitigate this risk, employing high cardinality partition keys is
            recommended. High cardinality refers to a large and diverse set of
            partition keys, which translates to a broad spectrum of hash values
            when processed through the MD5 hashing function. This diversity
            promotes an even spread of data across all available shards,
            fostering a more balanced distribution of records and preventing the
            overloading of any individual shard.
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
          <h2 className="text-md lg:text-xl my-8 md:my-10 font-bold text-center">
            The Record Distribution Process
          </h2>
          <p className="mt-8">
            In the dynamic landscape of data streaming, AWS Kinesis Data Streams
            are engineered to adeptly handle fluctuating data loads with a
            precise mechanism that maps partition key hashes to specific shards.
            This critical mapping dictates the distribution of incoming data,
            ensuring efficient throughput by assigning each shard a specific
            range of hash values. This effectively segments the data space,
            enabling parallel processing and consistent data flow. The need to
            adjust to varying rates of data flow is where resharding comes into
            play, allowing for an increase or decrease in the number of shards
            to align with the stream{`'`}s capacity requirements. This
            adaptability is key to maintaining performance without incurring
            unnecessary costs. Observing the distribution of partition key
            hashes among the shards offers us deeper insight into the rationale
            behind resharding and its impact on the stream{`'`}s sharding
            pattern, which is crucial for the system{`'`}s scalability and for
            optimizing performance and cost.
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
            This diagram provides a clear view of the distribution process,
            illustrating how AWS Kinesis Data Streams allocates incoming data
            records and their corresponding partition key hash values across
            shards. It shows a Lambda function dispatching data with distinct
            partition keys. Each key undergoes the MD5 hashing algorithm,
            resulting in a unique hash value placed within specific hash key
            ranges. These ranges are pre-mapped to corresponding shards—such
            that one shard is responsible for hash values from 0 to 25% of the
            available hash space, the next from 25% to 50%, and so forth. This
            systematic allocation aims to ensure that data is spread evenly
            across the shards, promoting a uniform distribution of the
            processing load.
          </p>
          <p className="mt-6">
            Yet, even with this system in place, the phenomenon of {`'`}hot
            sharding{`'`} can manifest. This occurs when numerous data records
            share partition keys that are too alike, causing their hash values
            to cluster within a narrow band of the hash key space. Consequently,
            one shard may become {`'`}hot{`'`}, overloaded with data, and thus a
            choke point that impedes the stream{`'`}s capability to process data
            efficiently. The visual serves not just as an explanation of shard
            allocation but also as a cautionary illustration of why a high
            cardinality in partition keys—yielding a broad spectrum of hash
            values—is crucial to avert such imbalances and maintain optimal
            stream performance.
          </p>
          <h2 className="text-md lg:text-xl my-8 md:my-10 font-bold text-center">
            Shard Splitting
          </h2>
          <BeforeAndAfter
            first="SplittingAndMerging2.drawio"
            second="SplittingAndMerging3.drawio"
            firstText="Split Shard"
            secondText="Revert"
          />
          <p className="mt-8">
            Shard splitting is a pivotal operation within AWS Kinesis Data
            Streams that allows for the stream{`'`}s expansion to manage higher
            data throughput. In this process, a single shard is divided into two
            or more shards, effectively increasing the stream{`'`}s capacity to
            process and store data. The process of splitting is crucial when a
            shard approaches its maximum capacity in terms of either the data
            input rate (1 MB/s or 1,000 records/s) or the data output rate (2
            MB/s). By splitting, you can double the throughput capacity for the
            stream, as each new shard possesses the same capacity as the
            original.
          </p>
          <p className="mt-6">
            Before the split, as visualized in the first diagram, we have a
            shard responsible for a certain range of MD5 hash values derived
            from partition keys. When a shard is split—depicted in the second
            diagram—this range is subdivided, and each new shard inherits a
            portion of the hash key range. It{`'`}s important to understand that
            the data already in the stream stays in place; existing records are
            not redistributed among the new shards. This means that for some
            time, records with the same partition key could reside in both the
            original and the new shards, necessitating clients to track multiple
            shards for complete data sequence retrieval. Over time, as new
            records are added, they will be directed exclusively to the new
            shards based on their hash key. This overlap is a transitional
            state, essential for avoiding data loss and maintaining the sequence
            of records until the system stabilizes post-resharding. Consumers
            must handle this complexity, ensuring that applications reading from
            the stream are aware of the new shards and can access data from all
            relevant shards to maintain a complete and ordered dataset.
          </p>
          <h2 className="text-md lg:text-xl my-8 md:my-10 font-bold text-center">
            Shard Merging
          </h2>
          <BeforeAndAfter
            first="SplittingAndMerging4.drawio"
            second="SplittingAndMerging5.drawio"
            firstText="Merge Shards"
            secondText="Revert"
          />
          <p className="mt-8">
            In AWS Kinesis Data Streams, shard merging is a deliberate process
            used to scale down the number of shards and manage the stream more
            efficiently, particularly in scenarios where the volume of incoming
            data has decreased. Contrary to splitting, where shards are divided
            to increase capacity, merging combines the hash key ranges of two
            shards to form a single, more encompassing shard. This operation is
            depicted in the provided diagrams, which illustrate the state of the
            shards before and after a merge.
          </p>
          <p className="mt-6">
            Before merging, each shard independently manages a specific segment
            of the hash key range. The first diagram shows three shards, each
            responsible for a slice of the key space. The merge operation then
            unifies the ranges of two shards. However, unlike the typical case
            where contiguous shards are merged, the example demonstrates a
            unique situation: Shard 1 and Shard 3 are merged, combining
            non-adjacent hash key ranges into a single shard. The resulting
            merged Shard 1 now covers the hash key range from 0% to 33.3% and
            from 66.6% to 100%, bypassing the middle segment which remains
            managed by Shard 2.
          </p>
          <p className="mt-6">
            Post-merge, Shard 3 ceases to receive new records, becoming a{`'`}
            closed shard{`'`}. It retains its existing data, serving read
            requests until the data expires as per the stream{`'`}s retention
            policy. During this transition, consumers must adjust to read from
            both the merged Shard 1 and the closed Shard 3 to maintain data
            completeness. Once the retention period concludes, Shard 3 is
            deleted, leaving Shard 1 with its expanded but non-sequential hash
            key range. This unconventional merging strategy necessitates careful
            attention from consumers to ensure they can correctly handle the new
            data distribution and avoid data loss. The final state, after all
            records from the closed Shard 3 have expired, leaves a streamlined,
            two-shard configuration that is more cost-effective and reflective
            of the stream{`'`}s reduced data throughput requirements.
          </p>
          {/* ********************************************* */}
          <h2 className="text-md lg:text-xl my-8 md:my-10 font-bold text-center">
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
            Enhanced Fan-Out in AWS Kinesis Data Streams fundamentally
            transforms the paradigm of data consumption by enabling parallel
            processing across consumers, each with a guaranteed dedicated
            throughput from each shard. This feature significantly enhances the
            ability to process streaming data in real time by allocating a fixed
            bandwidth of 2MB/s to each consumer registered with a shard. It
            addresses the challenge of shared throughput, where competing
            consumers may experience variable data transfer rates. With Enhanced
            Fan-Out, consumers benefit from a stable, exclusive data stream,
            thus obviating the variability and potential lag associated with
            conventional shared throughput setups.
          </p>
          {/*  */}
          <p className="mt-6">
            The advantages of Enhanced Fan-Out are particularly significant in
            environments where different processes need to ingest and analyze
            the same data concurrently for diverse purposes. It is particularly
            advantageous in scenarios where real-time data processing is
            critical, such as in financial trading, interactive online
            platforms, or sophisticated analytics workflows. By ensuring an
            isolated stream of data for each consumer, Enhanced Fan-Out ensures
            that applications can operate at peak efficiency, processing and
            analyzing data as it arrives, without the overhead of managing
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
            This diagram illustrates a nuanced use of AWS Kinesis Data Streams,
            highlighting the use of Enhanced Fan-Out to match the specific data
            throughput demands of each shard. Shard 3, with its high ingestion
            rate nearing the 1MB per second write limit, is where Enhanced
            Fan-Out becomes particularly advantageous. Consumers 1, 2, and 3
            each have a dedicated 2MB per second throughput to this shard,
            facilitated by Enhanced Fan-Out, which ensures they can process the
            high-volume data stream in real-time. Consumer 4, however, is
            uniquely positioned; it is the sole consumer using the standard
            shared throughput to read from Shard 3. Since no other consumer is
            contending for this shard{`'`}s data, Consumer 4 can effectively
            utilize the full 2MB per second read capacity that the shard offers,
            similar to the dedicated throughput of Enhanced Fan-Out. This setup
            illustrates a cost-efficient approach, maximizing the shard{`'`}s
            available resources without the additional expense of Enhanced
            Fan-Out while maintaining efficient data processing for Consumer 4.
          </p>
          <p className="mt-6">
            For Shards 1 and 2, however, the influx of data is at a more modest
            pace, with rates of .15MB and .1MB per second, respectively. Given
            these rates, the standard throughput of 2MB per second is more than
            sufficient for every consumer to access the data from these shards
            effectively. The shared throughput model is thus a cost-effective
            solution for these shards, avoiding the unnecessary expenses of
            Enhanced Fan-Out while maintaining an efficient and reliable data
            processing flow for all consumers accessing these shards.
          </p>
          <p className="mt-6">
            In a proactive data management strategy, if there was an
            anticipation of increased data volume on Shards 1 and 2, steps could
            be taken to avoid potential bottlenecks. One approach would be to
            split these shards before they reach capacity, ensuring continued
            high throughput and availability of data to consumers.
            Alternatively, adding more Enhanced Fan-Out lines could accommodate
            higher data consumption needs without shard modification, providing
            a flexible solution to dynamically changing data flow.
          </p>
          <p className="mt-6">
            It is also important to note that the strategic use of Enhanced
            Fan-Out, as shown with Shard 3, is ideal for critical applications
            where data must be processed in real time and with minimal latency.
            In such cases, the cost of Enhanced Fan-Out is justified by the need
            for immediate data availability and the ability to process large
            volumes of data concurrently.
          </p>
          <p className="mt-6">
            Overall, the diagram and the accompanying strategies underscore the
            importance of tailoring the consumption model to the data throughput
            of each shard. By understanding the individual needs of each shard
            and applying Enhanced Fan-Out judiciously, organizations can
            optimize their data stream{`'`}s performance, ensuring that each
            consumer gets the right amount of data at the right time, and is
            prepared to scale up as data volumes grow.
          </p>
          {/* ********************************************* */}
          <h2 className="text-md lg:text-xl my-8 md:my-10 font-bold text-center">
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
            In the realm of AWS Kinesis Data Streams, manually polling for
            records is a more hands-on approach that requires an in-depth
            understanding of the stream{`'`}s shard architecture. The process
            begins with the ListShards API call, which retrieves metadata about
            all shards within a Kinesis data stream. This includes the unique
            identifier for each shard, known as the ShardId, which is vital for
            subsequent operations.
          </p>
          <p className="mt-6">
            Once the shards are listed and identified, the next step involves
            invoking the GetShardIterator API. This provides a shard iterator—a
            pointer that marks the position in the shard from which to begin
            reading records sequentially. The type of shard iterator chosen
            dictates the starting point for data retrieval, whether it{`'`}s the
            oldest record with TRIM_HORIZON, a specific record with
            AT_SEQUENCE_NUMBER, the one immediately following a specified record
            with AFTER_SEQUENCE_NUMBER or the latest record with LATEST.
          </p>
          <p className="mt-6">
            The final step in the manual polling process is to call GetRecords
            using the shard iterator. This API returns a batch of data records,
            up to 10MB or 1000 records, and crucially, a new shard iterator for
            subsequent read operations. The responsibility lies with the user to
            manage these shard iterators effectively, ensuring a continuous and
            uninterrupted flow of data retrieval. Strategies for this management
            include maintaining a state table that tracks the most recent shard
            iterator for each shard, and potentially storing this information in
            a database such as DynamoDB, which can be updated with each new
            iterator received.
          </p>
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
          <p className="mt-8">
            The image above presents a typical JSON response from manually
            polling an AWS Kinesis Data Stream. It reveals the records array,
            where each record is identified by a unique SequenceNumber and
            includes its Data payload, PartitionKey, and the
            ApproximateArrivalTimestamp. Alongside these, the NextShardIterator
            is provided, which is a crucial element as it serves as the key to
            the next set of records.
          </p>
          <p className="mt-6">
            When polling Kinesis, it{`'`}s essential to differentiate between
            the NextShardIterator and record SequenceNumber. The
            NextShardIterator is a temporary token that allows continued access
            to the stream for a brief period, typically expiring 15 minutes
            after issuance. In contrast, a record{`'`}s SequenceNumber is a
            permanent identifier for an individual record within the shard and
            does not expire until the record itself is purged from the stream
            after the retention period.
          </p>
          <p className="mt-6">
            For ongoing applications running on EC2 instances, manual polling
            can be executed in a continuous loop. This method uses the
            NextShardIterator to immediately request the next set of records,
            ensuring a real-time data processing stream. When no new data is
            returned, the application can schedule the next poll within the
            iterator{`'`}s active window, thus avoiding expiration and
            maintaining the flow of data.
          </p>
          <p className="mt-6">
            However, when leveraging AWS Lambda for data stream consumption, a
            different strategy is employed. Lambda functions are stateless and
            have execution time limits, thus they utilize event-driven
            triggers—such as AWS EventBridge—for periodic invocation. In this
            setup, each invocation processes data using the current
            NextShardIterator. This ensures that the function operates within
            the iterators validity period, and no records are missed between
            invocations.
          </p>
          <p className="mt-6">
            Meanwhile, for long-term data tracking and recovery scenarios,
            applications can store record SequenceNumbers. By saving the last
            processed SequenceNumber into a persistent storage like DynamoDB, an
            application can later resume polling from that exact point in the
            stream, using the SequenceNumber to obtain a new shard iterator.
            This approach is particularly useful when applications need to
            restart or recover from failures, as it ensures they can pick up
            processing right where they left off without data loss or
            duplication.
          </p>
          <p className="mt-6">
            Understanding and differentiating between a NextShardIterator and
            record SequenceNumbers is fundamental to effectively managing the
            flow of data within Kinesis Data Streams. While the
            NextShardIterator serves as a transient access point for current
            data retrieval, expiring after a short duration, SequenceNumbers
            provide a durable reference to each record within the stream, useful
            for long-term tracking and data recovery purposes.
          </p>
          <p className="mt-6">
            In conclusion, manually polling Kinesis Data Streams demands a
            nuanced approach to data retrieval and iterator management. Whether
            the use case requires continuous, real-time processing on persistent
            infrastructure or batch processing via stateless Lambda functions,
            the strategy must be tailored to fit. By maintaining a balance
            between immediate data access with NextShardIterator and durable
            record tracking with SequenceNumbers, applications can achieve the
            twin goals of real-time responsiveness and robustness against
            interruptions. This strategic approach ensures that Kinesis Data
            Streams can be leveraged to their fullest potential, providing
            scalable and efficient solutions for handling streaming data in
            diverse operational environments.
          </p>
          <h2 className="text-md lg:text-xl my-8 md:my-10 font-bold text-center">
            Lambda Triggers
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
            The setup depicted in the provided diagram exemplifies the seamless
            integration between AWS Kinesis Data Streams and Lambda functions, a
            core tenet of serverless architecture. When a Kinesis stream is
            specified as an event source for a Lambda function, it automatically
            triggers the function as new data flows in. This configuration,
            defined by parameters such as the stream{`'`}s ARN, batch size, and
            starting position, prescribes how and when data is batched and
            processed. Such an event-driven model liberates developers from the
            complexities of continuous polling, instead enabling an architecture
            that responds in real time to the data being streamed.
          </p>
          <p className="mt-6">
            This automated invocation of Lambda functions by Kinesis is a
            testament to the efficiency of AWS{`'`}s serverless offerings. It
            ensures that for every batch of records detected in the stream, a
            corresponding Lambda function is triggered to process that data.
            This mechanism is intrinsic to constructing responsive and agile
            applications that need to react promptly to the incoming data
            stream. The concurrent executions of Lambda functions are
            dynamically managed, allowing the system to scale in parallel with
            the rate of incoming records, thus maintaining the performance and
            reliability of the data processing pipeline without any manual
            scaling intervention.
          </p>
          <p className="mt-6">
            The advantages of this setup are manifold. It allows for a reduction
            in the overhead typically associated with infrastructure management,
            as there{`'`}s no need to maintain and monitor servers that
            continuously poll the data stream. The Lambda functions, instead,
            are only executed when needed, thereby optimizing resource use and
            cost. Additionally, this model of Lambda triggers supports the
            creation of more responsive applications, as it facilitates
            near-instantaneous data processing, which is crucial for use cases
            where timely data analysis can lead to significant business insights
            or actions.
          </p>
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
          <p className="mt-8">
            When a Kinesis Data Stream serves as a trigger, the Lambda function
            receives an event payload formatted as shown in the JSON example.
            This payload consists of a batch of records, each encompassing
            critical metadata like the partition key and sequence number, as
            well as the data blob itself. This format is pivotal for Lambda
            functions to apply their logic comprehensively across the dataset,
            ensuring that the processing of records is both efficient and
            effective. By receiving data in larger aggregates, Lambda functions
            can perform more substantial and complex transformations or
            analyses, providing richer insights than if they were processing
            single records.
          </p>
          <p className="mt-6">
            The batched delivery of records to Lambda functions also underscores
            the scalable and efficient nature of the serverless model. Each
            batched event represents an optimized grouping of records, allowing
            the Lambda function to maximize its processing power on a more
            significant and informative dataset. This method also reduces the
            number of invocations, which can significantly cut costs while still
            maintaining high throughput. Moreover, the structured format of the
            event makes it easier for developers to write logic that can handle
            the nuances of data streams, such as ordering and handling
            duplicates, which are critical for ensuring data integrity.
          </p>
          <p className="mt-6">
            In addition, the batch processing capability inherent in the
            Lambda-Kinesis integration lends itself to more flexible and
            sophisticated data processing strategies. It facilitates the
            deployment of microservices architectures, where each function can
            be responsible for a specific aspect of data processing, thus
            enhancing maintainability and scalability. It also allows for the
            incorporation of complex event processing (CEP) systems that can
            detect patterns and correlations across multiple records in
            real-time, triggering appropriate business workflows.
          </p>
          <p className="mt-6">
            To conclude, using AWS Lambda with Kinesis Data Streams for batch
            processing represents a paradigm shift in handling streaming data.
            It exemplifies a streamlined, cost-effective approach that is highly
            adaptable and scalable, suitable for a wide array of applications
            that require real-time data processing capabilities. This
            integration enables organizations to focus more on delivering value
            and less on the underlying infrastructure, allowing them to quickly
            adapt to changing data volumes and patterns, and maintain a
            competitive edge in today{`'`}s fast-paced digital landscape.
          </p>
        </div>
        {/* ********************************************* */}

        <h2 className="text-md lg:text-xl my-8 md:my-10 font-bold text-center">
          App Back-End Design
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
            The backend design for {`"`}ColorStream Dynamics{`"`} is a
            well-orchestrated ensemble of AWS services, leveraging the
            serverless capabilities of AWS Lambda, the robust data streaming of
            AWS Kinesis, and the durable storage of Amazon DynamoDB, all
            coordinated by the API Gateway. This design underpins a resilient
            and scalable infrastructure, capable of handling real-time data
            processing and storage with efficiency.
          </p>
          <p className="mt-6">
            At the core of the operation, the API Gateway serves as the entry
            point, integrating two Lambda functions: SendData and PollData. The
            SendData function is responsible for ingesting data into the Kinesis
            stream. It takes in records—each comprising a color and an
            amount—and appends them to the shard within the stream. Given that
            the stream consists of a single shard, this setup ensures a
            straightforward routing of all records into the stream without the
            need for complex shard management.
          </p>
          <p className="mt-6">
            The PollData function embodies the manual polling strategy discussed
            earlier. It commences by invoking the ListShards API to identify the
            shard in the stream and then proceeds to interact with DynamoDB.
            Here, it retrieves the last processed sequence number, a critical
            reference point that determines the next record to read from the
            shard. If a sequence number is present, PollData fetches a shard
            iterator with the AfterSequenceNumber method, allowing the
            continuation of data processing right where it left off. Conversely,
            if the sequence number is absent or expired, implying a fresh start
            or a potential recovery scenario, the function defaults to the
            TrimHorizon method, ensuring no data is missed by starting from the
            oldest record available.
          </p>
          <p className="mt-6">
            As PollData retrieves records through GetRecords, it parses and
            processes each batch. Concurrently, it dutifully updates DynamoDB
            with the latest processed sequence number, thus maintaining a
            stateful record of the stream{`'`}s consumption. This update is
            pivotal as it ensures the PollData function can resume data
            processing seamlessly, even after interruptions or failures. This
            mechanism showcases an intelligent failover strategy where, in the
            event of an expired sequence number, the function can revert to a
            known good state, preventing data loss and maintaining the integrity
            of the data processing lifecycle.
          </p>
          <p className="mt-6">
            In the event that the database encounters a scenario where the
            sequence number has expired, the design is robust enough to revert
            to the TrimHorizon method, thereby preserving data continuity. This
            demonstrates the system{`'`}s resilience and its ability to
            self-heal, which is essential for long-term operational stability.
          </p>
          <p className="mt-6">
            In summary, the backend design encapsulates a sophisticated yet
            streamlined approach to data management. It provides a powerful
            example of how serverless technologies can be woven together to
            create a system that{`'`}s not only reactive and capable of
            real-time data processing but also self-correcting and resilient to
            the temporal limitations of data pointers like shard iterators. This
            backend is engineered not just to handle the current flow of data
            but to adapt and recover from potential disruptions, ensuring a
            consistent and reliable service for the application{`'`}s users.
          </p>
        </div>
        {/* ********************************************* */}

        <h2 className="text-md lg:text-xl my-8 md:my-10 font-bold text-center">
          App Front-End Implementation
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
            The front end for {`"`}ColorStream Dynamics{`"`} directly interfaces
            with AWS Kinesis Data Streams, executing real-time data streaming
            and polling as orchestrated by the backend architecture. Leveraging
            AWS Lambda, API Gateway, Kinesis, and DynamoDB, the front end
            presents an operational view of the entire data lifecycle within the
            Kinesis environment. This interface serves to validate the backend
            {`'`}s functionality and demonstrates its readiness for broader
            application, effectively showcasing the project{`'`}s adept use of
            AWS cloud infrastructure in managing and visualizing data streams.
            Through this front end, users experience the immediate application
            of the concepts detailed in the backend, cementing {`"`}ColorStream
            Dynamics{`"`} as a practical embodiment of cloud-based data stream
            management.
          </p>
          <p className="mt-6">
            Directly building upon the interactive capabilities of the
            {`"`}ColorStream Dynamics{`"`} front end, each color-coded Lambda
            function icon stands as an actionable feature within the interface.
            Engaging with these icons does more than trigger visual feedback; it
            initiates a series of API calls that set the SendData function into
            motion. This function dynamically channels data packets, composed as
            {`\`{ color, amount }\``}, into the Kinesis stream. The {`"`}amount
            {`"`}
            within these packets is deliberately randomized to accurately
            emulate the fluctuating nature of data volumes that typify
            real-world streaming scenarios, providing users with a realistic
            portrayal of data flow in such environments.
          </p>

          <p className="mt-6">
            Animations within the front end serve a dual purpose, providing both
            an aesthetic and a functional role. They track the data packets{`'`}
            transit from the Lambda icons to the Kinesis icon, mirroring the
            actual data flow occurring within the AWS infrastructure. This
            visual representation is not just illustrative—it{`'`}s a real-time
            reflection of data being streamed through Kinesis.
          </p>
          <p className="mt-6">
            The PollData function is also visually articulated within the
            interface, translating the data retrieval process into a series of
            intuitive animations. As records are polled, the interface generates
            animated packets that flow from the Kinesis stream icon to the
            PollData function, with the color and sequence of these packets
            corresponding directly to the actual data records being processed.
          </p>
          <p className="mt-6">
            The design of this front end is purposefully crafted to offer more
            than visualization; it actively performs and displays the operations
            within the Kinesis stream, providing a holistic and interactive
            educational experience. Users are granted a window into the stream
            {`'`}s dynamics and the entire data lifecycle, from the moment of
            ingestion to the intricacies of data processing. This is achieved
            through a well-integrated interface that emphasizes both operational
            transparency and user engagement.
          </p>
          <p className="mt-6">
            Through interaction with the {`"`}ColorStream Dynamics{`"`}{" "}
            interface, users receive immediate operational feedback and are
            guided to a deeper comprehension of AWS Kinesis Data Streams{`'`}{" "}
            architectural symphony. The careful integration of visual elements
            with live data processing activities positions the front end as a
            pivotal tool for illustrating the practical usage and expertise of
            Kinesis services, solidifying the project{`'`}s role as an
            educational benchmark in cloud-based data stream management.
          </p>
        </div>
        {/* ********************************************* */}

        <h2 className="text-md lg:text-xl my-8 md:my-10 font-bold text-center">
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
            The deployment architecture for {`"`}ColorStream Dynamics{`"`} is a
            carefully structured process that begins with the cloning of the Git
            repository, containing both the React application and the AWS
            Serverless Application Model (SAM) project. This bifurcation allows
            for a clear separation of concerns, with the SAM project defining
            the backend infrastructure and the React app embodying the front-end
            user interface. The deployment sequence is designed to ensure a
            coherent and automated setup of the entire architecture.
          </p>
          <p className="mt-6">
            Firstly, the AWS backend architecture is established through the SAM
            project. The `sam build` command compiles the necessary cloud
            resources, which are then deployed to the AWS environment using `sam
            deploy`. This deployment creates the backend services, including
            Lambda functions, the API Gateway, a Kinesis stream, and a DynamoDB
            table. The orchestration is done in such a way that the deployment
            outputs are utilized to configure the React application, ensuring
            that the front end is aligned with the backend resources it
            interacts with.
          </p>
          <p className="mt-6">
            Upon successful deployment, CloudFormation outputs key parameters
            such as the API Gateway URL and the S3 Bucket Name. These outputs
            are integral to configuring the React application{`'`}s environment
            variables. The user must update the `.env` file with these values,
            ensuring the front end is aware of and can correctly interface with
            the backend services. Following this, the user proceeds with the
            standard Node.js workflow, running `npm install` to fetch the
            necessary packages, followed by `npm run build` to compile the
            production build of the React application.
          </p>
          <p className="mt-6">
            The final step in the deployment involves transferring the build
            output to the designated AWS S3 bucket using the `aws s3 sync`
            command. This bucket has been preconfigured by the CloudFormation
            template to serve as a static website host, providing public access
            to the front-end interface of the project. A custom Lambda function
            triggered as a CloudFormation custom resource, is responsible for
            setting the appropriate permissions and enabling the static website
            hosting feature. Additionally, this Lambda function is designed to
            empty the bucket when the CloudFormation stack is deleted, ensuring
            that the bucket can be removed without any manual cleanup, thus
            fully automating the lifecycle management of the deployment.
          </p>
          <p className="mt-6">
            In conclusion, the deployment architecture of {`"`}ColorStream
            Dynamics{`"`}
            embodies a comprehensive and automated approach to cloud resource
            management. From backend orchestration to front-end configuration
            and deployment, each step is meticulously designed to ensure a
            seamless setup process. The use of AWS CloudFormation and SAM not
            only streamlines the creation and linkage of cloud components but
            also encapsulates best practices for resource cleanup and
            management. This deployment strategy exemplifies the project{`'`}s
            commitment to a robust, scalable, and user-friendly cloud
            application, encapsulating the full spectrum of cloud-based data
            management in a cohesive educational experience.
          </p>
        </div>
        {/* ********************************************* */}
      </div>
    </>
  );
}
