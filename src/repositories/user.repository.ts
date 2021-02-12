import {inject, Getter} from '@loopback/core';
import {DefaultCrudRepository, repository, HasManyRepositoryFactory} from '@loopback/repository';
import {MongotodoDataSource} from '../datasources';
import {User, UserRelations, List} from '../models';
import {ListRepository} from './list.repository';

export class UserRepository extends DefaultCrudRepository<
  User,
  typeof User.prototype.id,
  UserRelations
> {

  public readonly lists: HasManyRepositoryFactory<List, typeof User.prototype.id>;

  constructor(
    @inject('datasources.mongotodo') dataSource: MongotodoDataSource, @repository.getter('ListRepository') protected listRepositoryGetter: Getter<ListRepository>,
  ) {
    super(User, dataSource);
    this.lists = this.createHasManyRepositoryFactoryFor('lists', listRepositoryGetter,);
    this.registerInclusionResolver('lists', this.lists.inclusionResolver);
  }
}
