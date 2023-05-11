import Mail from '@/components/icons/mail';
import {Button} from '@/components/ui/button';
import {Input} from '@/components/ui/input';
import Image from 'next/image';

export default function Home() {
  return (
    <main>
      <div className="flex gap-x-2">
        <Button>hello</Button>
        <Button intent="secondary">hello</Button>
        <Button intent="tertiary">hello</Button>
      </div>

      <div className="mt-5 flex gap-x-2">
        <Button size="lg">hello</Button>
        <Button intent="secondary" size="lg">
          hello
        </Button>
        <Button intent="tertiary" size="lg">
          hello
        </Button>
      </div>

      <div className="mt-5">
        <Input label="Field title" id="testing" placeholder="Start typing ..." icon={<Mail />} />
      </div>
    </main>
  );
}
