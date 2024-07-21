'use client';
import { Button, Textarea } from '@nextui-org/react';
import { Tabs, Tab, Card, CardBody } from '@nextui-org/react';
import { UserProfile } from '@clerk/nextjs';
import { generateApiKey, regenerateApiKey } from '@/shared/utils/token';
import React, { useState } from 'react';
import toast from 'react-hot-toast';
import {type Metadata } from "next";

// export const metadata:Metadata = {
//   title: 'Setting | Dashboard'
// }

const Page = () => {
  const [apiKey, setApiKey] = useState('Api key will be here...');

  const handleCopy = () => {
    navigator.clipboard.writeText(apiKey).then(() => {
      toast.success('Copied');
    });
  };
  return (
    <div className='flex w-full flex-col my-12'>
      <Tabs aria-label='Options'>
        <Tab key='api-keys' title='API keys'>
          <Card>
            <CardBody>
              <div>
                <Textarea
                  isDisabled
                  label='Api key'
                  labelPlacement='outside'
                  placeholder='Enter your description'
                  defaultValue='Api key will be here'
                  value={apiKey}
                  className='w-full copy-text'
                />
                <div className='flex items-center justify-between my-6'>
                  <Button
                    onClick={handleCopy}
                    color='secondary'
                    size='sm'
                    variant='bordered'
                  >
                    Copy API key
                  </Button>
                  <div className='flex items-center gap-5'>
                    <Button
                      onClick={async () => {
                        const token = await regenerateApiKey();
                        setApiKey(token);
                      }}
                      color='primary'
                      size='sm'
                      variant='bordered'
                    >
                      Regenerate API key
                    </Button>
                    <Button
                      onClick={async () => {
                        const token = await generateApiKey();
                        setApiKey(token);
                      }}
                      color='primary'
                      size='sm'
                      variant='bordered'
                    >
                      Generate API key
                    </Button>
                  </div>
                </div>
              </div>
            </CardBody>
          </Card>
        </Tab>
        <Tab key='user' title='User Details'>
          <Card>
            <CardBody>
              <UserProfile />
            </CardBody>
          </Card>
        </Tab>
      </Tabs>
    </div>
  );
};

export default Page;
