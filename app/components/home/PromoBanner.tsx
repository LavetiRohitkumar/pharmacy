export default function PromoBanner() {
  return (
    <section className="mx-auto w-[calc(100%-32px)] max-w-[1280px] py-12 sm:w-[calc(100%-48px)] lg:w-[calc(100%-64px)]">
      <div className="bg-green-700 text-white rounded-2xl p-10 text-center">
        <h2 className="text-3xl font-bold">
          Take Care of Your Health
        </h2>

        <p className="mt-3 text-green-100">
          Find everyday healthcare essentials in one place.
        </p>
      </div>
    </section>
  );
}