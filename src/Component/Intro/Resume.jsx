import '../CSS/Resume.css' ;

const Resume = () => {
  return (
    <div id = "resume">
	    <h2>1.기초 자료</h2>
	    <table>
		    <tr>
			    <td  rowspan="6" >사 진</td>
			    <td  bgcolor="#e3fcff">성 명</td>	
			    <td colspan="3"> 최 현 빈 </td>
	  	  </tr>
		    <tr>
  			  <td bgcolor="#e3fcff">주민등록번호</td>
	  		  <td colspan="3">010827-3******</td>
  		  </tr>
	  	  <tr>
	  		  <td bgcolor="#e3fcff">E-mail</td>
	  		  <td colspan="3">cohb0333@gachon.ac.kr</td>
	  	  </tr>
	  	  <tr>
	  		  <td bgcolor="#e3fcff">전화번호</td>
	  		  <td>X</td>
	  		  <td bgcolor="#e3fcff">휴대폰</td>
	  		  <td>010-5912-1657</td>
	  	  </tr>
	  	  <tr>
	  	  	<td bgcolor="#e3fcff">우편번호</td>
	  	  	<td>***</td>	
	  	  	<td bgcolor="#e3fcff">비상연락처</td>
	  	  	<td>***</td>
	  	  </tr>
	  	  <tr>
	  	  	<td bgcolor="#e3fcff">주소</td>
	  	  	<td colspan="3">***</td>
	  	  </tr>	
	    </table>

      <h2>2.학력사항</h2>
      <table>
      <tr>
	      <th bgcolor="#e3fcff">기간</th>
	      <th bgcolor="#e3fcff">상세내용</th>
	      <th bgcolor="#e3fcff">비고</th>
      </tr>
	    <tr>
	  	  <td>초등학교</td> <td>00초등학교</td> <td></td>
	    </tr>
	    <tr>
	    	<td>중학교</td> <td>00중학교</td> <td></td>
	    </tr>
	    <tr>
	    	<td>고등학교</td> <td>00고등학교</td> <td></td>
	    </tr>
	    <tr>
	    	<td>대학교 </td> <td>가천대학교</td> <td></td>
	    </tr>
    </table>

    <h2>3. 경력사항</h2>
    <table>
      <tr>
        <th bgcolor="#e3fcff">기간</th>
		    <th bgcolor="#e3fcff">관련</th>
      </tr>
	    <tr>
		   <td>~</td> <td></td>
	    </tr>
	    <tr>
		   <td>~</td> <td></td>
	    </tr>
	    <tr>
		   <td>~</td> <td></td>
	    </tr>
	    <tr>
		   <td>~</td> <td></td>
	    </tr>
    </table>

    <h2>4. 개인능력 및 장단점</h2>
    <table>
	    <tr height="30">
	  	  <td rowspan="2" bgcolor="#e3fcff">자격증 및 포상</td>
	  	  <td colspan="3">리눅스마스터 자격증 2급</td>
	  	  <td colspan="1">KAIT</td>
	    </tr>
	    <tr height="30"> 
        <td colspan="3">운전면허증</td>
        <td colspan="1">경찰청</td>
  	  </tr>
  	  <tr height="30"> 
        <td rowspan="2" bgcolor="#e3fcff">컴퓨터능력</td>
  		  <td colspan="2"></td>
        <td bgcolor="#e3fcff">상/중/하</td>
      </tr>
	    <tr height="30" > 
		    <td colspan="2"></td>
        <td bgcolor="#e3fcff">상/중/하</td>
	  	  <td></td>
      </tr>
	    <tr height="30"> 
		    <td rowspan="2" bgcolor="#e3fcff">취미</td>	
		    <td colspan="2">프로그래밍 및 컴퓨터 게임</td>
        <td bgcolor="#e3fcff">특기</td>
		    <td></td>
      </tr>
    </table>
  </div>
  );
};

export default Resume;