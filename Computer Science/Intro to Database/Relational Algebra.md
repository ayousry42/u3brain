#Database 

# Algebra
Mathematical System to represent relations in db and can be divided into two parts:
- Operators
- Operands

## Operators
- Addition: $+$
- Subtraction: $-$
- Multiplication: $*$
- Division: $/$
- Etc.

## Operands
Any variable $x$ or result.

# Relational Algebra
Algebra but for databases ykno?

## Operands
Tables/Relationships, Common things needed with relation.

## Operators
- Union: $\cup$
- Intersection: $\cap$
- Difference: $-$ (ex: $A-B$ , Present in A not in B)
- Selection: $\sigma$
- Projection: $\Pi$
- Product (Join): $X$
- Renaming: $\rho$

### Selection Operator $\sigma$
Selects/Displays a certain row (data), written as:
$\sigma_{condition} ({tableName})$

Assume existence of *Student* table, select all data for students with GPA more than 3
`SELECT * FROM Students WHERE GPA > 3`

Algebraic form:
$\sigma_{GPA > 3} ({Student})$

### Projection Operator $\Pi$
Used when asterisk ($*$) is ommitted in the selection statement.
$\Pi_{attribute}(\sigma_{condition} ({tableName}))$

On said *Student* table, Select only: StudentName
`SELECT studentName FROM Students WHERE GPA > 3`

Algebraic form:
$\Pi_{studentName} (\sigma_{GPA > 3} ({Students}))$

### Product (Join) Operation $(X_{\theta}, \bowtie)$
Cross references and groups tables with on a certain condition.

#### Join Types
- Natural Join: Shoves everything with copying.
- Theta Join: Without copying. (Checks relation and foreign key)

Suppose table *Employee* and it is to be joined with a table *Department* on the employee's working department ID with the department's ID

Algebraic:
${Employee} \bowtie_{Employee.DepNo = Dep.DepNo} {Department}$

### Rename $\rho$
Changes the name of a Column (Attribute), Must project on the column to be renamed.

$\rho(fullName) \rightarrow \Pi_{name} { (Employee) }$
$\rho(S_1, S_2, S_3) \rightarrow \Pi_{(Empty, name, salary)} {(Employee)}$


### Union $\cup$, Intersection $\cap$, Difference $-$
Adds/Compares/Removes according to data, new table is created as a byproduct.

## Expression Precedence
Precedence order:
1. Uniary Operators (Operations done on a single Table): $\sigma$ , $\Pi$ , $\rho$
2. Multiplicative (Adds up two): $\bowtie$, $X$
3. Lowest Operator (Data level stuff): $\cup$, $\cap$, $-$

## Query Tree
`SELECT s.studentName FROM student(S), lecturer(L) WHERE s.id=l.id AND l.name = 'abc' AND s.branch = 'IT'`

Notice how one condition depends on 2 tables (Use join), and other two depend on their own table (Use selection).

Algebraic:
$\Pi_{s.studentName} (\sigma_{l.name = 'abc' \, AND \, s.branch = 'IT'} (Student \bowtie_{s.id = l.id} Lecturer))$

Tree:
![[WhatsApp Image 2022-08-27 at 3.18.23 PM.jpeg]]