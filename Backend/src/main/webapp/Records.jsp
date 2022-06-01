<%@ page language="java" contentType="text/html; charset=ISO-8859-1"
	pageEncoding="ISO-8859-1"%>
<!DOCTYPE html>
<html>
<head>
<meta charset="ISO-8859-1">
<title>Sales_Records</title>
<link href="https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-1BmE4kWBq78iYhFldvKuhfTAU6auU8tT94WrHftjDbrCEXSU1oBoqyl2QvZ6jIW3" crossorigin="anonymous">
	<script src="https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/js/bootstrap.bundle.min.js" integrity="sha384-ka7Sk0Gln4gmtz2MlQnikT1wXgYsOg+OMhuP+IlRH9sENBO0LRn5q+8nbTov4+1p" crossorigin="anonymous"></script>
</head>
<body>
	<header>
		<div>
			<p class="navbar-brand">Sales Records</p>
		</div>
		<ul class="navbar-nav">
			<li><a href="<%=request.getContextPath()%>/list" class="nav-link">Records</a></li>
		</ul>
	</header>
	<br>

	<div class="row">
		<h2 class="text-center">Records of Sales</h2>
		<hr>
		<div>
			<a href="<%=request.getContextPath()%>/new" class="btn btn-success">Add Records</a>
		</div>
		<br>
		<table class="table table-bordered">
			<thead>
				<tr>
					<th>SL_NO</th>
					<th>area_business</th>
					<th>business_code</th>
					<th>cust_payment_terms</th>
					<th>doc_id</th>
					<th>document_type</th>
					<th>invoice_currency</th>
					<th>baseline_create_date</th>
					<th>clear_date</th>
					<th>document_create_date</th>
					<th>document_create_date_1</th>
					<th>due_in_date</th>
					<th>posting_date</th>
					<th>business_year</th>
					<th>cust_number</th>
					<th>invoice_id</th>
					<th>isOpen</th>
					<th>posting_id</th>
					<th>total_open_amount</th>
					<th>is_deleted</th>
					<th>aging_bucket</th>
				</tr>
			</thead>
			<tbody>
				<c:forEach var="Record" items="${AllRecords}">
					<tr>
						<td><c:out value="${Record.sl_no}" /></td>
						<td><c:out value="${Record.area_business}" /></td>
						<td><c:out value="${Record.business_code}" /></td>
						<td><c:out value="${Record.cust_payment_terms}" /></td>
						<td><c:out value="${Record.doc_id}" /></td>
						<td><c:out value="${Record.document_type}" /></td>
						<td><c:out value="${Record.invoice_currency}" /></td>
						<td><c:out value="${Record.baseline_create_date}" /></td>
						<td><c:out value="${Record.clear_date}" /></td>
						<td><c:out value="${Record.document_create_date}" /></td>
						<td><c:out value="${Record.document_create_date_1}" /></td>
						<td><c:out value="${Record.due_in_date}" /></td>
						<td><c:out value="${Record.posting_date}" /></td>
						<td><c:out value="${Record.business_year}" /></td>
						<td><c:out value="${Record.cust_number}" /></td>
						<td><c:out value="${Record.invoice_id}" /></td>
						<td><c:out value="${Record.isOpen}" /></td>
						<td><c:out value="${Record.posting_id}" /></td>
						<td><c:out value="${Record.total_open_amount}" /></td>
						<td><c:out value="${Record.is_deleted}" /></td>
						<td><c:out value="${Record.aging_bucket}" /></td>
						
					</tr>
				</c:forEach>
			</tbody>
		</table>
	</div>
</body>
</html>