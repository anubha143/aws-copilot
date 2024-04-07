const data = [
  {
    id: 1,
    title: (
      <>
        <b>Bucket xyz-logs-1 (production account #12345)</b>
      </>
    ),
    message: (
      <>
        This bucket has <b>1 TB</b> of data, and it does not use any storage
        tiers. There is more than <b>500 GB</b> of data that has not been
        accessed. You can save <b>$1000</b> by deleting that data or <b>$700</b>{" "}
        by moving them to lower tier.
      </>
    ),
  },
  {
    id: 2,
    title: (
      <>
        <b>Bucket abc-user-1 (production account #12345)</b>
      </>
    ),
    message: (
      <>
        This bucket has abnormally high reads and writes cost of <b>$5000</b>{" "}
        per month, increasing by the day. Consider reading smaller chunks of
        data or changing your storage that is more cost effective for reads and
        writes.
      </>
    ),
  },
];

const SavingAreas = () => {
  return (
    <div className="py-4">
      <div className="flex items-center justify-between space-x-4 w-full">
        <div className="text-xs text-gray-500">Top 2 Saving Areas</div>
        <div className="bg-gray-500 grow h-[1px]"></div>
      </div>
      {data?.map((item) => (
        <div
          key={item.id}
          className="border-2 border-green-500 rounded-lg p-4 my-4"
        >
          <p className="mb-2">{item.title}</p>
          {item.message}
        </div>
      ))}
    </div>
  );
};

export default SavingAreas;
