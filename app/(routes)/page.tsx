import getBillboard from "@/actions/get-billboard";
import Billboard from "@/components/ui/billboard"
import Container from "@/components/ui/container"

export const revalidate = 0;

const HomePage = async () => {
  const billboard = await getBillboard("a00a0ad6-ea85-483d-82ee-5c56a917af2c");

  return (
    <Container>
      <div className="space-y-10 pb-10">
        <Billboard data={billboard}/>
      </div>
    </Container>
    )
}

export default HomePage
