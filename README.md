## Anotations Utilizadas nas Entidades

### Lombok

- **`@Data`**:
  - Gera automaticamente os métodos getters, setters, toString, equals e hashCode, além de outros métodos utilitários.
  - **Importação**: `lombok.Data`

### JPA 

- **`@Entity`**:
  - Define que a classe é uma entidade JPA, mapeando-a para uma tabela no banco de dados.
  - **Importação**: `jakarta.persistence.Entity`

- **`@Table(name="tb_sellers")`** / **`@Table(name="tb_sales")`**:
  - Especifica a tabela do banco de dados à qual a entidade está mapeada. No caso, `tb_sellers` para a classe `Seller` e `tb_sales` para a classe `Sale`.
  - **Importação**: `jakarta.persistence.Table`

- **`@Id`**:
  - Indica o campo que é a chave primária da entidade.
  - **Importação**: `jakarta.persistence.Id`

- **`@GeneratedValue(strategy = GenerationType.IDENTITY)`**:
  - Especifica que o valor do campo será gerado automaticamente pelo banco de dados utilizando a estratégia de incremento de identidade.
  - **Importação**: `jakarta.persistence.GeneratedValue`

- **`@OneToMany(mappedBy = "seller")`**:
  - Define um relacionamento de um-para-muitos com a entidade `Sale`. O atributo `mappedBy` indica o campo na entidade `Sale` que mapeia o relacionamento (`seller`).
  - **Importação**: `jakarta.persistence.OneToMany`

- **`@ManyToOne`**:
  - Define um relacionamento de muitos-para-um com a entidade `Seller`, indicando que várias instâncias de `Sale` podem estar associadas a uma única instância de `Seller`.
  - **Importação**: `jakarta.persistence.ManyToOne`

- **`@JoinColumn(name = "seller_id")`**:
  - Especifica a coluna de junção no banco de dados que será usada para o relacionamento (`seller_id`).
  - **Importação**: `jakarta.persistence.JoinColumn`
