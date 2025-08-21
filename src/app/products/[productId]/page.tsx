export default async function ProductDetails({
  params,
}: {
  params: { productId: string };
}) {
  const productId = params.productId;

  return (
    <>
      <h1>Product details of {productId}</h1>
    </>
  );
}
