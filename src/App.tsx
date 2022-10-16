import { textinput } from './components/textinput'
import { Heading } from './components/heading';
import { Logo } from './logo';
import './styles/global.css';
import { Envelope, Lock } from 'phosphor-react';
import { Checkbox } from './components/checkbox'
import { Text } from './components/text';
import { Button } from './components/button';

export function App() {
  return (
    <div className='w-screen h-screen flex-col bg-gray-900 flex items-center justify-center text-gray-100'>
      
      <header className='flex flex-col items-center'>
        <Logo/>

        <Heading size="lg" classname='mt-4'>
          Ignite Lab
        </Heading>

        <Text classname='text-gray-400 mt-1'>
          Faça login e começe a usar!
        </Text>

      </header>

      <form className='flex flex-col gap-4 items-stretch w-full max-w-[400px] mt-10'>

        <label htmlFor="email" className='flex flex-col gap-3' >
          <Text classname='font-semibold'>Endereço de e-mail</Text>
          <textinput.root>
            <textinput.icon>
              <Envelope/>
            </textinput.icon>
            <textinput.input type='email' id='email' placeholder='Digite seu e-mail'/>
          </textinput.root>
        </label>

        <label htmlFor="password" className='flex flex-col gap-3' >
          <Text classname='font-semibold'>Sua senha</Text>
          <textinput.root>
            <textinput.icon>
              <Lock/>
            </textinput.icon>
            <textinput.input type='password' id='password' placeholder='*******'/>
          </textinput.root>
        </label>
        <label htmlFor="remeber" className='flex items-center gap-2'>
          <Checkbox id='remeber'/>
          <Text size='sm' classname='text-gray-200'>Lembrar de mim por 30 dias</Text>
        </label>
        <Button type='submit' className='mt-4 '>Entrar na plataforma</Button>
      
      </form>

      <footer className='flex flex-col items-center gap-4 mt-8'>
        
        <Text asChild size='sm'>
          <a href="" className='text-gray-400 underline hover:text-gray-200'>Esqueceu sua senha?</a>
        </Text>
        <Text asChild size='sm'>
          <a href="" className='text-gray-400 underline hover:text-gray-200'>Não possui conta? Crie uma agora!</a>
        </Text>
        
      </footer>
    </div>
  )
}