import { AwaitedReactNode, Fragment, JSXElementConstructor, ReactElement, ReactNode, ReactPortal } from 'react';
import { Breadcrumb } from "react-bootstrap";

export default function Pageheader(props: { title: string | number | bigint | boolean | ReactElement<any, string | JSXElementConstructor<any>> | Iterable<ReactNode> | ReactPortal | Promise<AwaitedReactNode> | null | undefined; heading: string | number | bigint | boolean | ReactElement<any, string | JSXElementConstructor<any>> | Iterable<ReactNode> | ReactPortal | Promise<AwaitedReactNode> | null | undefined; active: string | number | bigint | boolean | ReactElement<any, string | JSXElementConstructor<any>> | Iterable<ReactNode> | ReactPortal | Promise<AwaitedReactNode> | null | undefined; }) {
  return (
    <Fragment>
      <div className="d-md-flex d-block align-items-center justify-content-between my-4 page-header-breadcrumb">
        <h1 className="page-title fw-semibold fs-18 mb-0">{props.title}</h1>
        <div className="ms-md-1 ms-0">
          <Breadcrumb className="mb-0" bsPrefix='breadcrumb mb-0'>
            <Breadcrumb.Item href="#!">{props.heading}</Breadcrumb.Item>
            <Breadcrumb.Item active aria-current="page">{props.active}</Breadcrumb.Item>
          </Breadcrumb>
        </div>
      </div>
    </Fragment>
  );
}
