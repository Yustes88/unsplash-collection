import { Button } from "~/components/ui/button";
import { Input } from "~/components/ui/input";
import { Label } from "~/components/ui/label";
import { Switch } from "~/components/ui/switch";

const CreateCollection = () => {
  return (
    <form className=" mx-auto my-6 max-w-xl rounded-md p-4 ">
      <div className="mb-6 space-y-2">
        <h1 className="text-[18px] font-bold italic">Create Collection</h1>
        <p className="text-xs ">
          Embark on your creative journey by crafting your own collection of
          captivating images
        </p>
      </div>
      <div className=" size-full  space-y-5">
        <div className="w-full space-y-2">
          <Label htmlFor="collection-name">Collection Name</Label>
          <Input id="collection-name" />
        </div>

        <div className="flex items-center space-x-2">
          <Switch id="status" />
          <Label htmlFor="status">Make it Public</Label>
        </div>

        <Button
          size="sm"
          variant="secondary"
          className="w-full dark:bg-gray-800"
        >
          Create Collection
        </Button>
      </div>
    </form>
  );
};

export default CreateCollection;
