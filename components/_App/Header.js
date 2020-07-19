import { Menu, Container, Image, Icon } from 'semantic-ui-react'
import Link from 'next/link';
import Router, { useRouter } from "next/router";
import NProgress from 'nprogress';


Router.onRouteChangeStart = () => NProgress.start();
Router.onRouteChangeComplete = () => NProgress.done();
Router.onRouteChangeError = () => NProgress.done();

function Header() {
  const router = useRouter();
  const user = true;


  function isActive(route) {
    return route === router.pathname;
  }

  return (
    <Menu stackable fluid id="menu" inverted >
      <Container text>
        <Link href="/">
          <Menu.Item header>
            <Image
              size="mini"
              src="/static/logo.png"
              style={{ marginRight: '1em' }}
            />
            Sarvam
          </Menu.Item>
        </Link>

        <Link href="/cart">
          <Menu.Item header>
            <Icon
              name="cart"
              size="small"
            />

            Cart
          </Menu.Item>
        </Link>
        {user && <Link href="/create">
          <Menu.Item header>
            <Icon
              name="add square"
              size="small"
            />
            Create
          </Menu.Item>
        </Link>}

        {user ? (<>

          <Link href="/account">
            <Menu.Item header>
              <Icon name="user" size="small" />
            Account
          </Menu.Item>
          </Link>
          <Link href="/index">
            <Menu.Item header>
              <Icon name="sign out" size="small" />
            Log Out
          </Menu.Item>
          </Link>
        </>)

          :
          (<>
            <Link href="/login">
              <Menu.Item header>
                <Icon
                  name="sign in"
                  size="small"
                />
            Sign In
          </Menu.Item>
            </Link>
            <Link href="/signup">
              <Menu.Item header>
                <Icon name="signup" size="small" />
            Sign Up
          </Menu.Item>
            </Link>
          </>)
        }
      </Container>
    </Menu >
  )
}

export default Header;
