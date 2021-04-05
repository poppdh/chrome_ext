import {CopyToClipboard} from 'react-copy-to-clipboard';

function View(props) {

  console.log(props)



  return(
    <>
    <div className="contents">
      <h2>{props.data[0].name}</h2>
      <div className="viewer">
        <dl>
          <dt>FTP서버</dt>
          <dd>sinsunseolnongtang.co.kr
            <CopyToClipboard
              text="sinsunseolnongtang.co.kr">
              <button type="button" className="copy">Copy</button>
            </CopyToClipboard>
          </dd>
        </dl>
        <dl>
          <dt>Username</dt>
          <dd>inday_sinsun
          <CopyToClipboard
              text="inday_sinsun">
              <button type="button" className="copy">Copy</button>
            </CopyToClipboard>
          </dd>
        </dl>
        <dl>
          <dt>Password</dt>
          <dd>inday32!d5^2
            <CopyToClipboard
              text="inday32!d5^2">
              <button type="button" className="copy">Copy</button>
            </CopyToClipboard>
          </dd>
        </dl>
        <dl>
          <dt>Port</dt>
          <dd>21
            <CopyToClipboard
              text="21">
              <button type="button" className="copy">Copy</button>
            </CopyToClipboard>
          </dd>
        </dl>
        <dl>
          <dt>Admin</dt>
          <dd>https://www.sinsunseolnongtang.co.kr/admin_zone/
            <CopyToClipboard
              text="https://www.sinsunseolnongtang.co.kr/admin_zone/">
              <button type="button" className="copy">Copy</button>
            </CopyToClipboard>
          </dd>
        </dl>
        <dl>
          <dt>ID</dt>
          <dd>inday
            <CopyToClipboard
              text="inday">
              <button type="button" className="copy">Copy</button>
            </CopyToClipboard>
          </dd>
        </dl>
        <dl>
          <dt>PW</dt>
          <dd>in2@61@8day
            <CopyToClipboard
              text="in2@61@8day">
              <button type="button" className="copy">Copy</button>
            </CopyToClipboard>
          </dd>
        </dl>
      </div>
    </div>
    </>
    
  )

}

export default View;
